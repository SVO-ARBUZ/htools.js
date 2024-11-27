Array.prototype.next = function () {
    if (this.index === undefined) {
        this.index = 0; // Инициализируем индекс, если его ещё нет
    } else {
        if (this.index < this.length - 1) {
            this.index++; // Увеличиваем индекс, если он не достиг конца массива
        } else {
            this.index = 0; // Сбрасываем индекс, если достигли конца массива
        }
    }
    return this[this.index]; // Возвращаем текущий элемент
};
function EasyRegex(str, letter, list) {
    const escapedLetter = letter.replace(/[-/\\^$*+?.()|[\]{}]/g, '\\$&'); // Экранируем специальные символы
    const regex = new RegExp(escapedLetter, 'g');
    const replacement = `[${list.join('')}]`; // Создаем шаблон с символами из списка
    return new RegExp(str.replace(regex, replacement));
}

