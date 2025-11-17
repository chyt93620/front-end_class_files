class ATM {
  constructor(money) {
    this.money = money;
  }

  deposit(n) {
    if (n == 0) {
      throw "存入金額不得為0";
    }
    if (n < 0) {
      throw "存入金額不得為負數";
    } else {
      this.money = this.money + n;
    }
  }
  balance() {
    // 雖然現在只回傳
    // 但可能要考慮可用金額(保留預先扣款)
    return this.money;
  }

  withdraw(n) {
    if (n == 0) {
      throw "領取金額不得為0";
    }
    if (n < 0) {
      throw "領取金額不得為負數";
    }

    // 雖然現在只有單純餘額
    // 但要考慮可用金額(保留預先扣款)
    // 用this.money可能會出問題
    if (n > this.balance()) {
      throw "領取金額不得超過餘額";
    } else {
      this.money = this.money - n;
      return n;
    }
  }
}

export { ATM };
