const fs = require('fs');
const dataPath = './data.json';

const getData = () => {
    const data = fs.readFileSync(dataPath);
    return JSON.parse(data);
};

const setData = (data) => {
    fs.writeFileSync(dataPath, JSON.stringify(data));
};

const getDataByType = (type) => {
    const data = getData();
    return data[type];
};

const getDataById = (type, id) => {
    const data = getDataByType(type);
    return data.find((item) => item.id === id);
};

const addData = (type, data) => {
    const items = getDataByType(type);
    const newItem = {
        ...data,
        id: `${type.toUpperCase()}-${Date.now()}`
    };
    items.push(newItem);
    const newData = { ...getData(), [type]: items };
    setData(newData);
    return newItem;
};

const updateData = (type, id, data) => {
    const items = getDataByType(type);
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1) {
        items[index] = {
            ...items[index],
            ...data
        };
        const newData = { ...getData(), [type]: items };
        setData(newData);
        return items[index];
    }
    return null;
};

const deleteData = (type, id) => {
    const items = getDataByType(type);
    const index = items.findIndex((item) => item.id === id);
    if (index !== -1) {
        items.splice(index, 1);
        const newData = { ...getData(), [type]: items };
        setData(newData);
        return id;
    }
    return null;
};

module.exports = { 
    getDataByType, 
    getDataById, 
    addData, 
    updateData, 
    deleteData 
};
