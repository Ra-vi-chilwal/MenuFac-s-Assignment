import WineData from "../../data.json";

// this function used to filter data according to alocholClass and property of required field
export const FilterData = ( alcoholType, item) => {
  let filteredData = [];
  for (let i = 0; i < WineData.length; i++) {
    if (WineData[i].Alcohol === alcoholType) {
        if(item){
            filteredData.push(Number(WineData[i][item]));
        } else{
            filteredData.push(WineData[i]);
        }
    
    }
  }
  return filteredData;
};
//
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
 export const GammaArray = (alcoholType)=>{
    let gammaArray = []
    for(let i =0 ; i<alcoholType.length; i++){
        let ashAndHue = alcoholType[i].Ash * alcoholType[i].Hue
        let gammaVal = ashAndHue/ alcoholType[i].Magnesium
        gammaArray.push(Number(gammaVal.toFixed(3)))
    }
    return gammaArray
  }