/*Counting Cards
+1 =>	2, 3, 4, 5, 6
0  => 7, 8, 9
-1 => 	10, 'J', 'Q', 'K', 'A'
*/
let count = 0;
function cc(card) {
  switch(card) {
    case 2:
    case 3:
    case 4:
    case 5:
    case 6:
      count++;
      break;
    case 10:
    case 'J':
    case 'Q':
    case 'K':
    case 'A':
      count--;
      break;
  }
  if (count > 0) {
    return count + " Bet";
  } else {
    return count + " Hold";
  }
}

// another solution
/*Counting Cards
+1 =>	2, 3, 4, 5, 6
0  => 7, 8, 9
-1 => 	10, 'J', 'Q', 'K', 'A'
*/
let count = 0;
function cc(card) {
  if (card > 1 && card < 7) {
    count ++;
  } else if(card === 10 || card ==='J'|| card ==='Q' || card ==='K' || card ==='A' ){
    count --;
  }
  if (count > 0) {
    return count + ' Bet';
  } else {
    return count + ' Hold';
  }
}

// another solution with Regex
let count = 0;
function cc(card) {
  let regex = /[JQKA]/;
  if (card > 1 && card < 7) {
    count ++;
  } else if(card === 10 || regex.test(card)){
    count --;
  }
  if (count > 0) {
    return count + ' Bet';
  } else {
    return count + ' Hold';
  }
}


