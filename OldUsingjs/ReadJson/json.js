var per = [{
	id: 001,
	name: '张三',
	job: '学生'
}, {
	id: 002,
	name: '李四',
	job: '老师'
}, {
	id: 003,
	name: '王五',
	job: '学生'
}];

window.onload = function() { //自动加载数据并显示
	var tbody = document.getElementById('tbody');

	for(var i = 0; i < per.length; i++) { //遍历json数据
		var trow = getDataRow(per[i]); //定义一个方法返回tr数据
		tbody.appendChild(trow);
	}
}

function getDataRow(h) {
	var row = document.createElement('tr'); //创建第一个

	var idCell = document.createElement('td');
	idCell.innerHTML = h.id; //填充数据
	row.appendChild(idCell); //加入行

	var nameCell = document.createElement('td')
	nameCell.innerHTML = h.name;
	row.appendChild(nameCell);

	var jobCell = document.createElement('td');
	jobCell.innerHTML = h.job;
	row.appendChild(jobCell);

	var delCell = document.createElement('td');
	row.appendChild(delCell);

	var btnDel = document.createElement('input');
	btnDel.setAttribute('type', 'button');
	btnDel.setAttribute('value', '删除');

	btnDel.onclick = function() {
		if(confirm('确定吗？')) {
			this.parentNode.parentNode.parentNode.removeChild(this.parentNode.parentNode);

		}
	}

	delCell.appendChild(btnDel);
	return row;

}