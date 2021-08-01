module.exports = {
  env: {
    DB_LOCAL_URI: "http://localhost:3000",
    DB_URI:
      "mongodb+srv://azurahat:hotel420@hotels.o2vqk.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",

    STRIPE_API_KEY:
      "pk_test_51JHq6cE2p5BTJmEJ0wMAjEuBNIorqCcGUF8igNjbqhpET8DU60ViiSCHvQT92uNGMFFQ7j3WCWhTLm20Kz8Y6ypX00bTj8jWdU",
    STRIPE_SECRET_KEY:
      "sk_test_51JHq6cE2p5BTJmEJ6VX38VdlUqVEgThOFEi4ed0jebxFO36NVedPvFoqY1hBwzydSH5vUmSOlxylWEs7Jd8u7vlB00lxPtytvE",

    STRIPE_WEBHOOK_SECRET: "whsec_g34rvjm666HZtB2xwtbGLol1oKPwf8dX",

    CLOUDINARY_CLOUD_NAME: "azurahat",
    CLOUDINARY_API_KEY: "491385474712394",
    CLOUDINARY_API_SECRET: "DOWll1ma1LQBf-tQY0y4mQfkmCg",

    SMTP_HOST: "smtp.mailtrap.io",
    SMTP_PORT: "2525",
    SMTP_USER: "c85f42042317f4",
    SMTP_PASSWORD: "e037bbdc746126",
    SMTP_FROM_EMAIL: "AzurHotel",
    SMTP_FROM_NAME: "noreply@azurhotel.com",
    NEXTAUTH_URL: "https://azur-hotel.vercel.app",
  },
  images: {
    domains: ["res.cloudinary.com"],
  },
};
