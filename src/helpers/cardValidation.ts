export const validationField = {
  onLyNumber: (value:string) => {
    return value.replace(/\D/g, '');
  },
  number: (value:string) => {
        value = validationField.onLyNumber(value)
        value = value.replace(/(\d{4})(?=\d)/g, '$1 ');
        return value
  },
  cvc:(value:string) => {
        return validationField.onLyNumber(value)
  },
  expiry: (value:string) => {
    value = validationField.onLyNumber(value)
    let formattedValue = "";
    for (let i = 0; i < value.length; i++) {
      if (i === 2) {
        formattedValue += "/" + value[i];
      } else {
        formattedValue += value[i];
      }
    }
    return formattedValue
  }
}


export const validationForm ={
  number:(value:string) => {
    const validate = /^\d{14}(?:\d{2})?$/.test(value.replace(/ /g, ""));
    return validate ? null : 'Invalidate Card Number';
  },
  name:(value:string) => {
    const validate =/^[a-zA-Z]{3,}$/.test(value);
    return validate ? null : 'Invalidate Name';
  },
  cvc:(value:string) => {
    const validate = /^\d{3}$/.test(value);
    return validate ? null : 'Invalidate CVC';
  },
  expiry:(value:string) => {
    const currentDate = new Date();
    const currentYear = Number(currentDate.getFullYear().toString().slice(2,));
    const [month,year] =value.split('/');
    let validate;
    if(month && year) {
      if(Number(month)>12) {
        validate = 'Invalidate Month';
        return validate
      }
      if (Number(year) >= currentYear && Number(year) <= currentYear + 10) {
        // Additional checks can be performed for the expiry month if required
        validate= null;
        return validate
      }
    }
    validate = 'Invalidate Expire Date'
    return validate ;
  },
}

export const errorsForm = {
  name: 'Invalidate Name',
  number:'Invalidate Card Number',
  cvc: 'Invalidate CVC',
  expiry: 'Invalidate Expiry'
}