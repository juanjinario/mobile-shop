const expiresSeconds = 3600;  // 1 hora

export const clearStorage = ({ key, value }) => {
    localStorage.clear();
}

export const getStorage = ({ key }) => {
    var now = Date.now();

    var expiresIn = localStorage.getItem(key + '_expiresIn');
    if (expiresIn===undefined || expiresIn===null) { expiresIn = 0; }

    if (expiresIn < now) {// Expirado
        removeStorage({ key });
        return null;
    } else {
        try {
            var value = JSON.parse(localStorage.getItem(key));
            return value;
        } catch(e) {
            console.error('Error obteniendo la key ['+ key + '] del localStorage: ' + JSON.stringify(e) );
            return null;
        }
    }
}

export const setStorage = ({ key, value }) => {

    var now = Date.now();  // milisegundos
    var schedule = now + expiresSeconds * 1000; 
    try {
        localStorage.setItem(key, JSON.stringify(value));
        localStorage.setItem(key + '_expiresIn', schedule);
    } catch(e) {
        console.error('Error guardando la key ['+ key + '] en localStorage: ' + JSON.stringify(e) );
        return false;
    }
    return true;
}

export const removeStorage = ({ key }) => {
    try {
        localStorage.removeItem(key);
        localStorage.removeItem(key + '_expiresIn');
    } catch(e) {
        console.error('Error eliminando la ['+ key + '] del localStorage: ' + JSON.stringify(e) );
        return false;
    }
    return true;
}