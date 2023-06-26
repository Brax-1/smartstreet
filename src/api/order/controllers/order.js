("use strict");

const Razorpay = require('razorpay'); 
const { RAZORPAY_ID_KEY, RAZORPAY_SECRET_KEY } = process.env;

const razorpayInstance = new Razorpay({
    key_id: RAZORPAY_ID_KEY,
    key_secret: RAZORPAY_SECRET_KEY
});

async function razorpayCheckout(options,products, days, startDate) {
    const order = await razorpayInstance.orders.create(options)
    console.log(products, "pp");
      await strapi.service("api::order.order").create({ data: {  products, days , startDate, stripeId: order.id } });
        return {
            success:true,
            msg:'Order Created',
            order_id:order.id,
            amount: options['amount'],
            key_id:RAZORPAY_ID_KEY,
            product_name:products.attributes.title,
            contact:"8567345632", // current user
            name: "Sandeep Sharma", 
            email: "sandeep@gmail.com"
        }
}

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::order.order", ({ strapi }) => ({
  async create(ctx) {
    const { days,startDate,products } = ctx.request.body;
    try {
      const lineItems = await Promise.all(
        [products].map(async (product) => {
          const item = await strapi
            .service("api::product.product")
            .findOne(product.id);

          return {
              currency: "INR",
              receipt: 'razorUser@gmail.com',
              amount: Math.round(item.price * 100 * days),
          };
        })
      );
      const order = await razorpayCheckout(lineItems[0],products,days,startDate)
      return { order: order, status:200 };
    } catch (error) {
      ctx.response.status = 500;
      return { error };
    }
  },
}));
