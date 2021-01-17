const { SETTING } = process.env;

import standard from './standard';
const settingMap = { standard };
const defaultSetting = settingMap[SETTING] || settingMap['standard'];

export default defaultSetting;
