// function add(a, b) {
//   return a + b;
// }

// 這樣寫也會過
// function add(a, b) {
//   return 3;
// }

// test("測試 add", () => {
//   expect(add(1, 2)).toBe(3);
//   expect(add(2, 2)).toBe(4);
// });

// const balance = 0;

// function saveMoney(n) {
//   if (n <= 0) {
//     console.log("錯誤");
//   } else {
//     return balance + n;
//   }
// }

// function takeMoney(n) {
//   if (n <= 0) {
//     console.log("錯誤");
//   } else {
//     return balance - n;
//   }
// }

// function checkBalance() {
//   return balance;
// }

//   expect(saveMoney(1000)).toBe(balance + 100);
//   expect(saveMoney(-1000)).toBe("不可為0或負數");
//   expect(saveMoney(0)).toBe("不可為0或負數");
//   expect(saveMoney(1.2)).toBe("存入金額該為整數");
//   expect(checkBalance()).toBe(`目前餘額為${balance}`);

// class ATM {
//   constructor(money) {
//     this.money = money;
//   }

//   deposit(n) {
//     if (n <= 0) {
//       console.log("錯誤");
//     } else {
//       this.money = this.money + n;
//     }
//   }
//   balance() {
//     return this.money;
//   }
// }

import { ATM } from "../src/atm.js";

describe("存錢功能", () => {
  test("可以存錢", () => {
    // 1. 建立ATM

    const atm = new ATM(10);

    // 2. 存錢

    atm.deposit(5);

    // 3. 看餘額

    expect(atm.balance()).toBe(15);
  });

  it("不可以存0元", () => {
    // 1. 建立ATM

    const atm = new ATM(10);

    // 2. 存錢
    expect(() => {
      atm.deposit(-2);
    }).toThrow("存入金額不得為負數");

    expect(() => {
      atm.deposit(0);
    }).toThrow("存入金額不得為0");

    // 3. 看餘額
    expect(atm.balance()).toBe(10);
  });
});

describe("領錢功能", () => {
  it("可以領錢", () => {
    // 1. 建立ATM
    const atm = new ATM(10);

    // 2. 領錢
    atm.withdraw(4);

    // 3. 看餘額
    expect(atm.balance()).toBe(6);
  });

  it("不可以領0元或是負數金額", () => {
    // 1. 建立ATM
    const atm = new ATM(100);

    // 2. 領錢
    expect(() => {
      atm.withdraw(0);
    }).toThrow("領取金額不得為0");

    expect(() => {
      atm.withdraw(-10);
    }).toThrow("領取金額不得為負數");
  });

  it("不能領超過本人餘額", () => {
    // 1. 建立ATM
    const atm = new ATM(100);

    // 2. 領錢

    expect(() => {
      atm.withdraw(1000);
    }).toThrow("領取金額不得超過餘額");
  });
});
