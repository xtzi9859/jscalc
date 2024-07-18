let m = 0;
let x = null;
let y = null;
let op = null;
$(function(){
	$('input[type="button"]').on('click', function(){
		num = $(this).val();
		if(num.match(/[0-9]/)) {
			m = Number(m) * 10 + Number(num);
			$('#disp').val(m);
		}
		else if(num == '=') {
			y = m;
			if(x != null && y != null){
				if(op = '+'){
					m = x + y;
				}
				else if(op = '-'){
					m = x - y;
				}
				else if(op = '*'){
					m = x * y;
				}
				else if(op = '/'){
					if(y == 0){
						$('#disp').val('Cannnot divide by 0');
						return;
					}
					else {
						m = x / y;
					}
				}
				$('#disp').val(m);
				x = m;
				y = null;
			}
		}
		else if(num == 'C') {
			m = 0;
			x = null;
			y = null;
			$('#disp').val('0');
		}
		else {
			op = num;
			x = m;
			m = 0;
			$('#disp').val(m);
		}
	})
})
