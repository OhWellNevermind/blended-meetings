
// Напишіть функцію для перевірки рядку на анаграму

const isAnagram = function ( str1, str2 ) {
  const normStr1 = str1.toLowerCase();
  const normStr2 = str2.toLowerCase();

  if ( normStr1.length !== normStr2.length ) {
    return false;
  } else if ( normStr1 === normStr2 ) {
    return false;
  } else {
    const sortStr1 = normStr1.split( '' ).sort().join();
    const sortStr2 = normStr2.split( '' ).sort().join();
    return sortStr1 === sortStr2;
  }
}

console.log( isAnagram( 'Abra', 'rBaa'));

