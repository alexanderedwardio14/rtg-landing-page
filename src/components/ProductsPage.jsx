import React from "react";
import { ShoppingCart, Star, ArrowRight } from "lucide-react";

const ProductsPage = () => {
  const products = [
    {
      title: "Premium Package",
      description:
        "Complete business solution with advanced features and priority support",
      price: "$499.99",
      features: [
        "24/7 Priority Support",
        "Advanced Analytics",
        "Custom Integration",
        "Unlimited Users",
        "API Access",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 5,
    },
    {
      title: "Business Suite",
      description:
        "Essential tools for growing businesses with professional support",
      price: "$299.99",
      features: [
        "Business Hours Support",
        "Basic Analytics",
        "Standard Integration",
        "Up to 50 Users",
        "Basic API Access",
      ],
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4.5,
    },
    {
      title: "Starter Kit",
      description: "Perfect for small businesses and startups",
      price: "$149.99",
      features: [
        "Email Support",
        "Basic Reporting",
        "Basic Features",
        "Up to 10 Users",
        "Community Support",
      ],
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60",
      rating: 4,
    },
  ];

  return (
    <div className="flex-1">
      <section className="container py-8 space-y-6 bg-slate-50 dark:bg-transparent md:py-12 lg:py-24">
        <div className="mx-auto flex max-w-[58rem] flex-col items-center space-y-4 text-center">
          <h1 className="font-heading text-3xl leading-[1.1] sm:text-3xl md:text-6xl">
            Our Products
          </h1>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg sm:leading-7">
            Choose the perfect solution for your business needs
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative overflow-hidden rounded-lg border bg-background p-2 transition-all hover:shadow-lg"
            >
              <div className="flex flex-col space-y-3">
                <div className="aspect-video overflow-hidden rounded-lg">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="object-cover w-full h-full transition-transform hover:scale-105"
                  />
                </div>
                <div className="space-y-1 text-sm p-4">
                  <h3 className="font-bold text-2xl">{product.title}</h3>
                  <div className="flex items-center space-x-1">
                    {[...Array(5)].map((_, i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${
                          i < Math.floor(product.rating)
                            ? "text-yellow-400 fill-current"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                    <span className="text-sm text-muted-foreground">
                      ({product.rating})
                    </span>
                  </div>
                  <p className="text-base text-muted-foreground">
                    {product.description}
                  </p>
                  <div className="pt-4">
                    <h4 className="text-sm font-medium">Key Features:</h4>
                    <ul className="list-disc list-inside text-sm text-muted-foreground space-y-1 pt-2">
                      {product.features.map((feature, i) => (
                        <li key={i}>{feature}</li>
                      ))}
                    </ul>
                  </div>
                  <div className="pt-4">
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-primary">
                        {product.price}
                      </span>
                      <button className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                        <ShoppingCart className="mr-2 h-4 w-4" />
                        Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mx-auto flex max-w-[58rem] flex-col items-center justify-center space-y-4 text-center">
          <h2 className="font-heading text-2xl leading-[1.1] sm:text-2xl md:text-4xl">
            Need a Custom Solution?
          </h2>
          <p className="max-w-[85%] leading-normal text-muted-foreground sm:text-lg">
            Contact us to discuss your specific requirements
          </p>
          <a
            href="/contact"
            className="inline-flex items-center justify-center rounded-md bg-primary px-8 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get in Touch
            <ArrowRight className="ml-2 h-4 w-4" />
          </a>
        </div>
      </section>
    </div>
  );
};

export default ProductsPage;
