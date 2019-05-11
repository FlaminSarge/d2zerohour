
var combosCsv = `1-1,2-12,8-10,White1
1-1,4-5,6-5,Red2
1-2,1-4,11-4,Red1
1-7,12-3,8-4,Yellow3
1-10,7-11,3-12,Red6
1-12,1-1,5-4,Cyan3
2-4,1-6,3-10,Green2
2-5,11-2,3-5,Yellow2
2-6,5-4,10-3,Cyan1
2-7,2-11,9-10,Yellow6
2-9,12-3,10-2,Purple5
3-3,1-3,6-8,Green7
4-3,2-4,2-9,Green1
4-3,2-11,4-7,Purple6
4-6,5-6,5-12,Blue4
4-8,12-8,9-3,White5
4-9,9-4,5-5,Yellow1
5-6,7-3,7-10,Red5
5-9,11-7,12-10,Purple7
6-5,6-10,1-1,Purple1
6-9,12-10,8-5,White7
6-11,11-4,12-4,Cyan4
7-2,8-3,3-12,White6
7-4,2-7,7-9,Green5
7-9,6-5,5-12,Yellow4
7-12,1-2,5-4,Blue5
8-4,5-8,9-4,Cyan2
8-5,11-8,11-11,Cyan7
8-6,2-9,2-10,White3
8-6,9-2,12-12,Yellow5
8-10,5-6,11-11,Red3
8-12,5-9,9-4,Cyan6
9-3,12-7,12-12,Green3
9-7,7-8,12-7,Purple4
9-9,8-10,8-6,Purple2
10-2,3-8,9-3,White2
10-3,2-3,7-11,Green4
10-5,6-2,3-9,Blue2
10-12,11-5,8-12,Green6
11-1,5-7,10-2,Blue6
11-4,2-8,4-8,Blue7
11-4,4-11,12-3,Yellow7
11-4,5-4,7-6,Red4
11-6,12-8,11-11,Red7
11-7,6-3,12-5,Purple3
11-11,7-3,8-11,Blue3
12-2,11-4,2-11,Cyan5
12-5,7-1,5-7,White4
12-5,12-11,4-4,Blue1`

// PARSE CSV
var data = {}
var combos = combosCsv.split(/\r\n|\n/);
for (let i = 0; i < combos.length; i++) {
  const element = combos[i];
  const values = element.split(',')

  const color = values[3].substring(0, values[3].length-1)

  const countToNumber = values[3].length-1
  const number = values[3][countToNumber]

  const terminal = color + ' ' + number

  if (!data[values[0]])
  {
    data[values[0]] = {}
  }
  data[values[0]][values[1]] = terminal
}

console.info(data) // The array looks like: data['1-2']['3-4'] = 'White 1'