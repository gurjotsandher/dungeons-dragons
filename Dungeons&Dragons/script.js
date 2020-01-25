var mainTable = document.createElement('table');
var row1 = document.createElement('tr');
var col1_1 = document.createElement('td');
col1_1.style.fontFamily = 'cursive';
col1_1.setAttribute('colspan', 2);
var col1_1_1 = document.createElement('div');
col1_1_1.style.display = 'flex';
col1_1_1.style.justifyContent = 'space-between';

col1_1_1.style.backgroundImage = "url(back1.png)";
var col1_1_1_1 = document.createElement('img');
col1_1_1_1.src = "img1.png";
col1_1_1_1.style.alignSelf = 'center';
col1_1_1_1.style.height = '100%';
col1_1_1.appendChild(col1_1_1_1);
var col1_1_1_2 = document.createElement('div');
col1_1_1_2.style.color = 'white';
col1_1_1_2.innerHTML = '<h1>EMBER<br>HUMAN MONK</h1>';
col1_1_1_2.style.textAlign = 'center';
col1_1_1.appendChild(col1_1_1_2);
var col1_1_1_3 = document.createElement('img');
col1_1_1_3.src = "img2.png";
col1_1_1_3.style.alignSelf = 'center';
col1_1_1_3.style.height = '100%';
col1_1_1.appendChild(col1_1_1_3);
col1_1.appendChild(col1_1_1);
row1.appendChild(col1_1);
mainTable.appendChild(row1);
var row2 = document.createElement('tr');
row2.style.backgroundImage = "url(back2.png)";
var col2_1 = document.createElement('td');
col2_1.style.width = '80px';
col2_1.style.verticalAlign = 'top';
var col2_1_1 = document.createElement('ul');
col2_1_1.style.listStyleType = 'none';
col2_1_1.style.paddingLeft = '0px';
var col2_1_1_1 = document.createElement('li');
col2_1_1_1.style.backgroundImage = "url(back1.png)";
col2_1_1_1.style.width = '75px';
col2_1_1_1.style.padding = '5px';
col2_1_1_1.style.color = 'white';
col2_1_1_1.style.textAlign = 'center';
col2_1_1_1.style.fontWeight = '600';
col2_1_1_1.style.marginBottom = '10px';
col2_1_1_1.innerHTML = '<div><p>LEVEL<br>(save)<br>I3</p></div>';
col2_1_1.appendChild(col2_1_1_1);

var col2_1_1_2 = document.createElement('li');
col2_1_1_2.style.backgroundImage = "url(back1.png)";
col2_1_1_2.style.width = '75px';
col2_1_1_2.style.padding = '5px';
col2_1_1_2.style.color = 'white';
col2_1_1_2.style.textAlign = 'center';
col2_1_1_2.style.fontWeight = '600';
col2_1_1_2.style.marginBottom = '10px';
col2_1_1_2.innerHTML = '<div><p>SPEED<br>IO</p></div>';
col2_1_1.appendChild(col2_1_1_2);

var col2_1_1_3 = document.createElement('li');
col2_1_1_3.style.backgroundImage = "url(back1.png)";
col2_1_1_3.style.width = '75px';
col2_1_1_3.style.padding = '5px';
col2_1_1_3.style.color = 'white';
col2_1_1_3.style.textAlign = 'center';
col2_1_1_3.style.fontWeight = '600';
col2_1_1_3.style.marginBottom = '10px';
col2_1_1_3.innerHTML = '<div><p>AC<br>22</p></div>';
col2_1_1.appendChild(col2_1_1_3);

var col2_1_1_4 = document.createElement('li');
col2_1_1_4.style.backgroundImage = "url(back1.png)";
col2_1_1_4.style.width = '75px';
col2_1_1_4.style.padding = '5px';
col2_1_1_4.style.color = 'white';
col2_1_1_4.style.textAlign = 'center';
col2_1_1_4.style.fontWeight = '600';
col2_1_1_4.style.marginBottom = '100px';
col2_1_1_4.innerHTML = '<div><p>HP<br>I60</p></div>';
col2_1_1.appendChild(col2_1_1_4);

col2_1.appendChild(col2_1_1);

var col2_2 = document.createElement('td');
col2_2.style.verticalAlign = 'top';
col2_2.style.paddingLeft = '10px';

var c = document.createElement('div');

var c1 = document.createElement('p');
c1.style.fontWeight = 600;
c1.style.fontSize = '24px';
c1.style.maxWidth = '208px';
c1.innerHTML = 'MELEE ATTACK +17/+17/+17/+17 (20 magic/20 magic/ 15magic/15magic)';
c.appendChild(c1);

var c2 = document.createElement('p');
c2.innerHTML = '<strong>TYPE</strong><br>Humanoid(Human)';
c.appendChild(c2);

var c3 = document.createElement('p');
c3.innerHTML = '<strong>SPECIAL ABILITIES</strong><br><strong>Unique</strong><br><strong>Deflect Arrows</strong> (+4 AC against ranged<br>attacks)<br><strong>Mobility</strong> (+4 AC against attacks of<br>opportunity)<br><strong>Evade Damage</strong> (If this creature successfully<br>saves against a damaging spell or special ability, <br>it takes no damage)<br><strong>Hide<br>Stunning Attack </strong> (DC 20)<br><strong>Immune Poison<br>Wholeness of Body</strong> (Replaces attacks: <br>self; heal 15 hp)<br><strong>Spell Resistance </strong>(May ignore spells unless<br>the caster rolls 11+)';
c3.style.width = '320px';
c.appendChild(c3);

var c4 = document.createElement('img');
c4.src = 'back3.png';
c4.style.position = 'absolute';
c4.style.left = '333px';
c4.style.top = '166px';
c4.style.filter = 'opacity(0.75)';
c.appendChild(c4);

col2_2.appendChild(c);
row2.appendChild(col2_1);
row2.appendChild(col2_2);
mainTable.appendChild(row2);

var row3 = document.createElement('tr');
var col3 = document.createElement('td');
col3.colSpan = 2;
col3.style.backgroundImage = "url(back1.png)";
col3.style.color = 'white';
col3.style.fontFamily = 'Tangerine';
col3.style.textAlign = 'center';
col3.innerHTML = '<h1>DUNGEONS DRAGONS</h1>';

row3.appendChild(col3);
mainTable.appendChild(row3);
mainTable.style.borderSpacing = 0;
document.body.appendChild(mainTable);