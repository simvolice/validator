/**
 * Created by simvolice on 27.02.2017 22:09
 */

const sessionToken = ""; //Здесь надо проверить только по длине минимум и максимум (от 10 и до 1000)


module.exports = {

    checkDateNow: function (date) {

        const dateNow = /^(\d{4})-(\d{2})-(\d{2})T(\d{2})\:(\d{2})\:(\d{2}).(\d{3})Z$/; //Дата в формате: "2011-01-26T13:51:50.417Z" - это ISO дата 2008-07-01T16:41:27.123+07:00
        return dateNow.test(date);

    },

    checkObjectId: function (id) {

        const _id = /^(?=[a-f\d]{24}$)(\d+[a-f]|[a-f]+\d)$/i; //Это индитификатор MongoID (ObjectId),
                                                              // его внешний вид такой:"507f1f77bcf86cd799439011"
        return _id.test(id);

    },

    checkGraphOfWork: function (workGraph) {

        const graphOfWork = /^(?=^.{16,16}$)(с[ ][0-2][0-9][:][0-5][0-9]).(до).([0-2][0-9][:][0-5][0-9])$/; // График работы, по такой маске: с 09:00 до 20:00
        return graphOfWork.test(workGraph);

    },

    checkNumberOfBankCard: function (cartNumber) {

        const numberOfBankCard = /^(?=^.{19,19}$)([0-5][0-9][0-9][0-9][-][0-9][0-9][0-9][0-9][-][0-9][0-9][0-9][0-9][-][0-9][0-9][0-9][0-9])$/; // Маска кредитной карты
        return numberOfBankCard.test(cartNumber);

    },

    checkNameOfCompany: function (companyName) {

        if(companyName.length>0 && companyName.length <=30){
            return true;
        }
        else {
            return false;
        }

    },

    checkSearchQuery: function (query) {
        if (query.length>1 && query.length <=100){
            return true;
        }
        else {
            return false;
        }
    },

    checkSessionToken: function (token) {
        if(token.length>1 && token.length <=1000){
            return true;
        }
        else {
            return false;
        }
    },

    checkAddressOfMonitor: function (address) {
        if(address.length>1 && address.length <=100){
            return true;
        }
        else {
            return false;
        }
    },

    checkEmail: function (email) {

        const testEmail = /^(?=.{2,253}$)(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return testEmail.test(email);

    },

    checkPass: function (pass) {

        const testPass = /^(?=[\x20-\x7E]*?[\w])(?=[\x20-\x7E]*?[\W])(?![\x20-\x7E]*?[\s])[\x20-\x7E]{7,19}$/;
        return testPass.test(pass);

    },

    checkRoleValid: function (role) {
        if(role == "screenHolder" || role == "advertiser"){
            return true
        } else{
            return false
        }
    },

    checkCostOfSecond: function (cost) {

        const costOfSecond = /^\d+\.?\d{0,2}$/; //Стоимость за секунду финансовый формат 2 знака после точки decemal Format
        return costOfSecond.test(cost);

    },

    checkTokenCSRF: function (token) {

        console.log(token);
        const tokenCSRF = /^[0-9a-f]{8}-?[0-9a-f]{4}-?[1-5][0-9a-f]{3}-?[89ab][0-9a-f]{3}-?[0-9a-f]{12}$/;
        return tokenCSRF.test(token);

    }
    //Здесь надо продолжить писать функции по остальным параметрам













};