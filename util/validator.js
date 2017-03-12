/**
 * Created by simvolice on 27.02.2017 22:09
 */

const testEmail = /^(?=.{2,253}$)(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const testPass = /^(?=[\x20-\x7E]*?[\w])(?=[\x20-\x7E]*?[\W])(?![\x20-\x7E]*?[\s])[\x20-\x7E]{7,19}$/;

//const role = /^$/; //Это роль, может иметь только два значения: screenHolder и advertiser
const nameOfCompany = /^$/; //имя компании
const addressOfMonitor = /^$/; //адрес, наверно по улице и номеру дома


const costOfSecond = /^[0-9]{1,10}$/; //Стоимость за секунду

const graphOfWork = /^(?=^.{16,16}$)(с[ ][0-2][0-9][:][0-5][0-9]).(до).([0-2][0-9][:][0-5][0-9])$/; // График работы, по такой маске: с 09:00 до 20:00
const numberOfBankCard = /^(?=^.{19,19}$)([0-5][0-9][0-9][0-9][-][0-9][0-9][0-9][0-9][-][0-9][0-9][0-9][0-9][-][0-9][0-9][0-9][0-9])$/; // Маска кредитной карты





module.exports = {

    graphOfWork: function (workGraph) {

        return graphOfWork.test(workGraph);

    },

    numberOfBankCard: function (cartNumber) {

        return graphOfWork.test(cartNumber);

    },




    testEmail: function (email) {

        return testEmail.test(email);

    },

    testPass: function (pass) {

        return testPass.test(pass);

    },


    roleValid: function (role) {
        if(role == "screenHolder" || role == "advertiser"){
            return true
        } else{
            return false
        }
    }




    //Здесь надо продолжить писать функции по остальным параметрам













};