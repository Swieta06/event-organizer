const { Order } = require("../../models");
const { Package } = require("../../models");


exports.getOrder = async function (req, res, next) {
    try{
        let statusParams = req.query.status;
        let userId = req.user.id;
       
        if(statusParams == null){
            let dataOrders = await Order.findAll({
                include:[{
                    model:Package,
                    attributes: ['name']
                }],
                where:{
                    UserId:userId
                },
                attributes:{
                    exclude:['customerName', 'address', 'companyName', 'tel','postalCode','desc','concept','UserId','PackageId','PaymentMethodId']
                },
                order: [
                    ['createdAt', 'DESC']
                ]
            });
            
            dataOrders.forEach(element => {
                switch (element.status){
                    case 0:
                        element.status = "Belum Memesan";
                        break;
                    case 1:
                        element.status = "Menunggu Pembayaran";
                        break;    
                    case 2:
                        element.status = "Verifikasi Pembayaran";
                        break;
                    case 3:
                        element.status = "Sedang Diproses";
                        break;
                    case 4:
                        element.status = "Pesanan Selesai";
                        break;
                    case 5:
                        element.status = "Pesanan Dibatalkan";
                        break;
                }
            });
          
            // res.send(dataOrders);
            res.render("pages/orderList", {orders:dataOrders});
        }else{
           
            let dataOrders = await Order.findAll({
                include:[{
                    model:Package,
                    attributes: ['name']
                }],
                where:{
                    UserId:userId,
                    status:statusParams
                },
                attributes:{
                    exclude:['customerName', 'address','companyName', 'tel','postalCode','desc','concept','UserId','PackageId','PaymentMethodId']
                },
                order: [
                    ['createdAt', 'DESC']
                ]
            });
            
            dataOrders.forEach(element => {
                switch (element.status){
                    case 0:
                        element.status = "Belum Memesan";
                        break;
                    case 1:
                        element.status = "Menunggu Pembayaran";
                        break;    
                    case 2:
                        element.status = "Verifikasi Pembayaran";
                        break;
                    case 3:
                        element.status = "Sedang Diproses";
                        break;
                    case 4:
                        element.status = "Pesanan Selesai";
                        break;
                    case 5:
                        element.status = "Pesanan Dibatalkan";
                        break;
                }
            });
           
            // res.send(dataOrders);
            res.render("pages/orderList", {orders:dataOrders});
        }
       
    }catch(error){
        next(error);
    }
};

