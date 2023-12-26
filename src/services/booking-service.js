const axios=require('axios');
const { StatusCodes } = require('http-status-codes');
const {BookingRepository}=reqire('../repositories');
const {ServerConfig}=require('../config')
const db=require('../models');
const AppError=require('../utils/error/app-error');

async function createBooking(data){
    return new Promise((resolve,reject)=>{
        const result=db.sequelize.transaction(async function bookingIml(t){
            const flight=await axios.get(`${ServerConfig.FLIGHT_SERVICE}/api/v1/flights/${data.flightId}`);
            const flightData=flight.data.data;
            if(data.noofSeats > flightData.totalSeats){
                reject(new AppError('Required no. of seats not available',StatusCodes.BAD_REQUEST));
            }
            resolve(true);
        });
    })
}

module.exports={
    createBooking
}