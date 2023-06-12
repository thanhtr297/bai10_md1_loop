let a = '<table border=\'1\' width=\'300\' cellspacing=\'0\' cellpadding=\'3\'>';
for (i =1;i<= 9; i++){
    a = a + '<tr>';
    for (j = 2; j <= 9; j++) {
        a = a + '<td>' + i*j + '</td>';
    }
    a = a + '</tr>';
}
a = a + '</table>';
document.write(a);