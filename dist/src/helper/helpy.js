const {
  stringify,
  parse
} = JSON;

const isEmpty = data => {
  if (Array.isArray(data)) {
    return data.length > 0 ? false : true;
  } else {
    return !Boolean(Object.keys(data).length);
  }
};

const isContain = (path, find) => ~path.indexOf(find);

const getFileName = string =>
  string.substring(string.lastIndexOf("/") + 1, string.length);


const toSeconds = (value, type) => type === 'minutes' ? value * 60 : type === 'hour' ? value * 60 * 60 : value

const toTime = seconds => `${Math.floor((seconds / (60 * 60)) % 24)} ${Math.floor((seconds / 60) % 60)} ${Math.floor(seconds % 60)}`
export {
  toSeconds,
  getFileName,
  isContain,
  isEmpty,
  toTime
}