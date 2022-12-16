import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import serviceOrder from "../models/serviceOrder.js";
import UserModal from "../../users/models/user.js";
import subcategories from "../models/subcategories.js";


export const addserviceorder = async (req, res) => {
    const { userId, serviceSubcategoryId, serviceDate, serviceTime, serviceSlot, address, paymentId, serviceStatus, serviceNote, serviceAmount } = req.body;

    if (!userId) {
        return res.status(200).json({
            status: 400,
            message: "User Id Is Required",
        });
    }
    if (!serviceSubcategoryId) {
        return res.status(200).json({
            status: 400,
            message: "Service Sub Category Id Is Required",
        });
    }
    if (!serviceDate) {
        return res.status(200).json({
            status: 400,
            message: "Service Date  Is Required",
        });
    }
    if (!serviceTime) {
        return res.status(200).json({
            status: 400,
            message: "Service Time  Is Required",
        });
    }
    if (!serviceSlot) {
        return res.status(200).json({
            status: 400,
            message: "Service Slot  Is Required",
        });
    }
    if (!address) {
        return res.status(200).json({
            status: 400,
            message: "Address Is Required",
        });
    }
    if (!paymentId) {
        return res.status(200).json({
            status: 400,
            message: "payment  Is Required",
        });
    }
    if (!serviceSubcategoryId) {
        return res.status(400).json({
            message: "Service Id  Is Required",
        });
    }
    if (!serviceAmount) {
        return res.status(400).json({
            message: "Amount  Is Required",
        });
    }
    try {


        const userDetail = await UserModal.findById(userId);



        const result = await serviceOrder.create({
            userId: userDetail,
            serviceDate,
            serviceSlot,
            serviceStatus,
            serviceTime,
            address,
            serviceSubcategoryId,
            paymentId,
            serviceNote,
            serviceAmount
        });
        return res.status(200).json({ result, status: 200 });

    } catch (error) {
        res.status(500).json({ message: "Something Went Wrong" });
        console.log(error);
    }
};
export const allserviceorder = async (req, res) => {
    try {
        const allorders = await serviceOrder.find({});
        //console.log(allproduct);
        if (!allorders) {
            return res.status(200).json({
                status: 400,
                message: "Orders Doesn't Exists !!"
            });
        }
        console.log(allorders, 'allorders')
        // allorders.map(async (item, index) => {
        //     const userDetail = await UserModal.findById(item.userId);
        //     res.status(200).json({
        //         result: {



        //         }, status: 200
        //     });
        // })
        // const userDetail = await UserModal.findById(allorders.);
        res.status(200).json({ result: allorders, status: 200 });
    } catch (error) {
        res.status(500).json({ message: "Something Went Wrong" });
        console.log(error);
    }
};
