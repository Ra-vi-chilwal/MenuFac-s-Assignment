import WineData from "../../data.json";

// this function used to filter data according to alocholClass and property of required field

let SortArray = []

export function sortSameTypeData (requiredField){
  let SortArray = []
 if(requiredField){
  for(let i =0; i<WineData.length; i++){
    let found = false;
    for(let j=0; j<SortArray.length; j++){
      if(SortArray[j].type === WineData[i].Alcohol){
        SortArray[j].typeArray = [...SortArray[j].typeArray, Number(WineData[i][requiredField])]
        found = true;
        break;
      }
        
    }
  if(found !== true){
  SortArray.push({type:WineData[i].Alcohol, typeArray: [Number(WineData[i][requiredField])]})  
  }
    
   }
 } else{
  for(let i =0; i<WineData.length; i++){
    let found = false;
    for(let j=0; j<SortArray.length; j++){
      if(SortArray[j].type === WineData[i].Alcohol){
        SortArray[j].typeArray = [...SortArray[j].typeArray, WineData[i]]
        found = true;
        break;
      }
        
    }
  if(found !== true){
  SortArray.push({type:WineData[i].Alcohol, typeArray: [WineData[i]]})  
  }
    
   }
 }
  return SortArray
 }


// export const FilterData = ( alcoholType, item) => {
//   let filteredData = [];
//   for (let i = 0; i < WineData.length; i++) {
//     if (WineData[i].Alcohol === alcoholType) {
//         if(item){
//             filteredData.push(Number(WineData[i][item]));
//         } else{
//             filteredData.push(WineData[i]);
//         }
    
//     }
//   }
//   return filteredData;
// };





// method for caluclating mean of array
export const Mean = (arr) => {
  let length = arr.length;
  let sum = arr.reduce((a, b) => (a + b), 0);
  let average = sum / length;
  return Number(average.toFixed(3));
};


// method for caluclating Median of array
export const Median = (arr) => {
  const mid = Math.floor(arr.length / 2);
  const nums = [...arr].sort((a, b) => a - b);
  return arr.length%2!==0 ? nums[mid] : (nums[mid-1]+ nums[mid])/2
};


// method for caluclating mode of array
export const Mode = (arr) => {
    const mode = {};
    let max = 0,
      count = 0;

    for (let i = 0; i < arr.length; i++) {
      const item = arr[i];

      if (mode[item]) {
        mode[item]++;
      } else {
        mode[item] = 1;
      }

      if (count < mode[item]) {
        max = item;
        count = mode[item];
      }
    }

    return max;
  };
// function for caluclating Gamma of array


// this function return array of calculated gamma array of each type of alcohol
 export const GammaArray = ()=>{
    let sortedValue = sortSameTypeData()
    let arrayOfGamma =[]
    for(let i = 0 ; i<sortedValue.length; i++){
      let initialArr =[]
      for(let j =0; j<sortedValue[i].typeArray.length; j++){
        let ashAndHue = sortedValue[i].typeArray[j].Ash * sortedValue[i].typeArray[j].Hue
        let gammaVal = ashAndHue/sortedValue[i].typeArray[j].Magnesium
initialArr.push(Number(gammaVal.toFixed(3)))
      }
      arrayOfGamma.push(initialArr)

    }


    return arrayOfGamma
  }