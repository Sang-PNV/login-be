import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _account from  "./account.js";
import _info from  "./info.js";

export default function initModels(sequelize) {
  const account = _account.init(sequelize, DataTypes);
  const info = _info.init(sequelize, DataTypes);

  info.belongsTo(account, { as: "user", foreignKey: "user_id"});
  account.hasMany(info, { as: "infos", foreignKey: "user_id"});

  return {
    account,
    info,
  };
}
