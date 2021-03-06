/* eslint-disable no-extend-native */
String.prototype.camelToSpaces = function() {
  return this.replace(/([a-z])([A-Z])/g, '$1 $2');
};

String.prototype.addQuotes = function() {
  return `"${this}"`;
};

function hasUpperCase(str) {
  return str.toLowerCase() !== str;
}

function hasWhiteSpace(str) {
  return str.indexOf(' ') >= 0;
}

export const formatLabelsForUrl = labels => {
  return labels.map(label => {
    if (!hasUpperCase(label)) {
      return label;
    }
    return label
      .camelToSpaces()
      .toLowerCase()
      .addQuotes();
  });
};

export const formatTextToSearch = text => {
  if (text !== '') {
    if (hasWhiteSpace(text)) {
      return `${`${text}`.addQuotes()}+`;
    }
    return `${text}+`;
  }
  return '';
};

export const formatLabelForName = name => {
  return name.camelToSpaces().toLowerCase();
};

export const joinItemsForUrl = (items, itemType) => {
  return items.map(item => `+${itemType.slice(0, -1)}:${item}`).join('');
};
