import Lists from '../config/Api'

const localStorageEffect =
    (key) =>
        ({ setSelf, onSet }) => {
            const savedValue = localStorage.getItem(key);
            /** setSelf = Callbacks to set or reset the value of the atom */
            if (savedValue != null) {
                setSelf(Lists.parse())
            }
        }