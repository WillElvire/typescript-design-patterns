/************************************************************************* */
/*                           OPEN AND CLOSE PRINCIPLE                      */
/************************************************************************* */



/**
 * @description open and close principle : * Open for extension , * Close for modification
 * @description we should never modify and existing code 
 * @description 
 */


/************************************************************************* */
/*                             EXERCICE                                    */
/************************************************************************* */

class Discount {
    giveDiscount(customerType : "premiun" | "regular") : number {
      return customerType == "premiun" ?  20 : 10;
    }
}

/************************************************************************* */
/*                              MY OWN                                    */
/************************************************************************* */
export class DiscountUpgrated {
    constructor(public userDiscount : DiscountUser) {
      console.log(userDiscount)
    }
    giveDiscount() : number {
        return this.userDiscount.value;
    }
}

type userType = "premiun" | "regular" | "fixed";

export class DiscountUser {
    userDiscountType : userType;
    value : number;

    constructor(userDiscountType : userType , discountValue : number  ) {
        this.userDiscountType = userDiscountType;
        this.value = discountValue;
    }

}
/************************************************************************* */
/*                               RESPONSE                                  */
/************************************************************************* */
interface customer {
    getDiscount() : number ;
}


class PremiumCustomer implements customer {
    getDiscount(): number {
        return 10;
    }
}

class RegularCustomer implements customer {
    getDiscount(): number {
        return 20;
    }
}
class DiscountFinal {
    giveDiscount(customer : customer) {
     return customer.getDiscount();
    }
}