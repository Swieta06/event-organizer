const { Order } = require("../../models");

exports.getOrder = async function (req, res, next) {
    try{
        let statusParams = req.query.status;
        let userId = req.user.id;
       
        if(statusParams == null){
            let dataOrders = await Order.findAll({
                where:{
                    UserId:userId
                },
                attributes:{
                    exclude:['customerName', 'companyName', 'tel','postalCode','desc','concept','UserId','PackageId','PaymentMethodId']
                }
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
                where:{
                    UserId:userId,
                    status:statusParams
                },
                attributes:{
                    exclude:['customerName', 'companyName', 'tel','postalCode','desc','concept','UserId','PackageId','PaymentMethodId']
                }
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
