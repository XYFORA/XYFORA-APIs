import { createSwaggerSpec } from "next-swagger-doc";

export const getApiDocs = async () => {

    const spec = createSwaggerSpec({
        apiFolder: "src/app/api",
        definition: {
            openapi: "3.0.0",
            info: {
                title: "XYFORA Full Stack Modern & Secure APIs",
                version: "1.0.0",
                description: "XYFORA delivers robust, high-performance APIs built with Express and Nest.js to support websites, full stack web apps, and e-commerce platforms.",
                contact: {
                    name: "XYFORA",
                    email: "main.xyfora@gmail.com",
                },
            },
            components: {
                securitySchemes: {
                    BearerAuth: {
                        type: "http",
                        scheme: "bearer",
                        bearerFormat: "JWT",
                    },
                },
            },
            tags: [
                {
                    name: "Auth",
                    description: "User authentication and account management."
                },
                {
                    name: "Products",
                    description: "Product creation and management."
                }
            ]
        }
    });

    return spec;

};