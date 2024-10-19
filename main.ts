import { PrismaClient } from "@prisma/client";

const db = new PrismaClient()

async function main() {
    // await db.user.create({
    //     data: {
    //         username: "khanumar03"
    //     }
    // })

    // await db.user.create({
    //     data: {
    //         username: "gaus07"
    //     }
    // })

    // await db.rolesConnector.create({
    //     data: {
    //         user: {
    //             connect: {
    //                 id: "6710c9ac8597d52f35ede042"
    //             }
    //         }
    //     }
    // })

    // await db.rolesConnector.create({
    //     data: {
    //         user: {
    //             connect: {
    //                 id: "6710c9ac8597d52f35ede043"
    //             }
    //         }
    //     }
    // })

    // const data = await db.user.findMany({
    //     where: {
    //         roles: {
    //             every: {
    //                 userId: "6710c9ac8597d52f35ede043",
    //                 role: "Author"
    //             }
    //         }
    //     },
    //     include: {
    //         roles: true
    //     }
    // })

    // console.log(data);
    
}

main()
.catch((ok) => {
    console.log(ok);
})