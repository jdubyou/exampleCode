var m = {'12am': '00',
		'01am' : '01',
		'02am' : '02',
		'03am' : '03',
		'04am' : '04',
		'05am' : '05',
		'06am' : '06',
		'07am' : '07',
		'08am' : '08',	
		'09am' : '09',
		'10am' : '10',
		'11am' : '11',
		'12am' : '12',
		'01pm' : '13',
		'02pm' : '14',
		'03pm' : '15',
		'04pm' : '16',
		'05pm' : '17',
		'06pm' : '18',
		'07pm' : '19',
		'08pm' : '20',	
		'09pm' : '21',
		'10pm' : '22',
		'11pm' : '23',
		'12pm' : '24',
};
var time = process.argv [2],
    singleMinutes = time.slice(2,4),
    doubleMinutes = time.slice(3,5),
    actualHour;
 if ('a' == time[4] && 'm' == time[5] || 'p' == time[4] && 'm' == time[6]){
 	actualHour = '0' + time.slice(0,1);
 	if (time[4] == 'p') {
 		actualHour += 'pm';
 	} else {
 		actualHour += 'am'
 	}
 	console.log(m[actualHour] + singleMinutes);
 	
 } else if ('a' == time[5] && 'm' == time[6] || 'p' == time[5] && 'm' == time[6]){
 	actualHour = time.slice(0,2);
 	if (time[5] == 'p') {
 		actualHour += 'pm';
 	} else {
 		actualHour += 'am';
 	}
 	console.log(m[actualHour] + doubleMinutes);

 } else if (m[time] == undefined){ 
	console.log('You have entered an invald time')
 }





