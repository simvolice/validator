/**
 * Created by simvolice on 27.02.2017 22:09
 */

const testEmail = /^(?=.{2,253}$)(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const testPass = /^(?=[\x20-\x7E]*?[\w])(?=[\x20-\x7E]*?[\W])(?![\x20-\x7E]*?[\s])[\x20-\x7E]{7,19}$/;

const role = /^$/; //Это роль, может иметь только два значения: screenHolder и advertiser
const nameOfCompany = /^$/; //имя компании
const addressOfMonitor = /^$/; //адрес, наверно по улице и номеру дома


const costOfSecond = /^$/; //Стоимость за секунду

const graphOfWork = /^$/; // График работы, по такой маске: с 09:00 до 20:00
const numberOfBankCard = /^$/; // Маска кредитной карты






module.exports = {


    testEmail: function (email) {

        return testEmail.test(email);


    },

    testPass: function (pass) {
        return testPass.test(pass);
    },


    //Здесь надо продолжить писать функции по остальным параметрам













};