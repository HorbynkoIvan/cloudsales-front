import request from 'superagent';
import data from "./mockData";

/*export const fetchData = async () => {
  const {body} = await request.get(
    'http://www.mocky.io/v2/5a5d1a012e000036279f84f6'
  );
  return body.data
};*/

export const fetchData = async () => {
    return new Promise(resolve => {
        resolve(data)
    })
}
