let ate = prompt('Введіть першу дату у форматі рррр, мм, дд');
let ate1 = prompt('Введіть іншу дату у форматі рррр, мм, дд');
let date = new Date(ate);
let date1 = new Date(ate1);

// порівнюємо роки у цих двох датах

if (date.getFullYear() < date1.getFullYear()) {
        console.log(`Дата ${date.getFullYear()} є меншою ніж дата ${date1.getFullYear()}`);
} else {
    if (date.getFullYear() > date1.getFullYear()) {
        console.log(`Дата ${date.getFullYear()} є більшою ніж дата ${date1.getFullYear()}`);
           } 
// роки однакові, тепер порівняємо місяці
        else {
          if (date.getMonth() < date1.getMonth()) {
            console.log(`Дата ${date.getFullYear()}.${date.getMonth()} менша ніж дата ${date1.getFullYear()}.${date1.getMonth()}`);
           } else {
                if (date.getMonth() > date1.getMonth()) {
                    console.log(`Дата ${date.getFullYear()}.${date.getMonth()} є більшою ніж дата ${date1.getFullYear()}.${date1.getMonth()}`)
                } else {
//  місяці однакові, значить потрібно порівняти дні у місяцях
                      if (date.getDate() < date1.getDate()) {
                           console.log(`Дата ${date.getFullYear()}.${date.getMonth()}.${date.getDate()} є меншою ніж дата ${date1.getFullYear()}.${date1.getMonth()}.${date1.getDate()}`)
                        }  else {
                                if (date.getDate() > date1.getDate()) {
                                    console.log (`Дата ${date.getFullYear()}.${date.getMonth()}.${date.getDate()} більша ніж дата ${date1.getFullYear()}.${date1.getMonth()}.${date1.getDate()}`)
                                    } else {
// дні однакові, значить однакові і дати в цілому
                                          console.log(`Дата ${date.getFullYear()}.${date.getMonth()}.${date.getDate()} однакова з датою ${date1.getFullYear()}.${date1.getMonth()}.${date1.getDate()}.`)
                                            }
                                }
                    }
                }
            }
 }