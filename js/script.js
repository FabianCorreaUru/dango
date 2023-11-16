
const Products = [
	{
		"title": "Tourmaline & Eucalyptus Bar Soap",
		"highlight": "Tourmaline & Eucalyptus",
		"properties": "Calm Redness & Irritation",
		"small": "Hydrating and Refreshing",
	},
	{
		"title": "Tourmaline & Argan Oil Bar Soap",
		"highlight": "Tourmaline & Argan Oil",
		"properties": "Exfoliates & Revitalizes",
		"small": "Revitalize Skin Cellular Function",
	},
	{
		"title": "Tourmaline & Tea Tree Bar Soap",
		"highlight": "Tourmaline & Tea Tree",
		"properties": "Detox & Antifungal",
		"small": "Reduces Skin Inflammation",
	},
	{
		"title": "Tourmaline & Unscented Bar Soap",
		"highlight": "Tourmaline & Unscented",
		"properties": "Energizes & Regenerates",
		"small": "Improves Skin Radiance",
	}	  
]

const Colors = ["turquoise","orange","green","pink","green2","pink2","blue"];

document.getElementById("Swap").addEventListener("click",Swap);
document.getElementById("Add").addEventListener("click",Add);
document.getElementById("Remove").addEventListener("click",Remove);

function Swap(){
	const classes = [];
	const collection = document.querySelectorAll('.item');
	const count = collection.length;

	collection.forEach((node) => {
   		 classes.push(node.children[0].children[0].className); 
	});

	const first = classes.splice(0,1)[0];
	classes.splice(count,0,first);

	for(let i=0; i<count; i++){
		collection[i].children[0].children[0].className = classes[i];
	}
}

function Add(){
	let randomProductNumber = Math.floor(Math.random() * 4);
	let product = Products[randomProductNumber];
	let randomProductColor = Math.floor(Math.random() * 7);
	let color = Colors[randomProductColor];

	const newItem = document.createElement("div");
	newItem.className = 'item';
	const newHead = document.createElement("div");
	newHead.className = 'head';
	const newLayout = document.createElement("div");
	newLayout.className = 'layout '+color;
	const newWrapper = document.createElement("div");
	newWrapper.className = 'wrapper';
	
	const newBox1 = document.createElement("div");
	newBox1.className = 'box box1';
	let Box1Text = document.createTextNode('tourmaly');
	newBox1.appendChild(Box1Text);
	newWrapper.appendChild(newBox1);

	const newBox2 = document.createElement("div");
	newBox2.className = 'box box2 highlight';
	let Box2Text = document.createTextNode(product.highlight);
	newBox2.appendChild(Box2Text);
	newWrapper.appendChild(newBox2);

	const newBox3 = document.createElement("div");
	newBox3.className = 'box box3';
	let Box3Text = document.createTextNode('All Natural Soap Bar');
	newBox3.appendChild(Box3Text);
	newWrapper.appendChild(newBox3);

	const newBox4 = document.createElement("div");
	newBox4.className = 'box box4';
	let Box4Text = document.createTextNode(product.properties);
	newBox4.appendChild(Box4Text);
	const newSmall = document.createElement("div");
	newSmall.className = 'small';
	let SmallText = document.createTextNode(product.small);
	newSmall.appendChild(SmallText);
	newBox4.appendChild(newSmall);
	newWrapper.appendChild(newBox4);

	const newBox5 = document.createElement("div");
	newBox5.className = 'box box5';	
	const newIcon = document.createElement("img");
	newIcon.src = '../img/icon.png';
	newIcon.className = 'icon';
	newBox5.appendChild(newIcon);
	newWrapper.appendChild(newBox5);

	const newBox6 = document.createElement("div");
	newBox6.className = 'box box6';
	let Box6Text = document.createTextNode('Suitable for all skin types');
	newBox6.appendChild(Box6Text);
	newWrapper.appendChild(newBox6);

	const newBox7 = document.createElement("div");
	newBox7.className = 'box box7';
	let Box7Text = document.createTextNode('Net Wt. 7 oz');
	newBox7.appendChild(Box7Text);

	const newTitle = document.createElement("h2");
	newTitle.className = 'title';
	let TitleText = document.createTextNode(product.title);
	newTitle.appendChild(TitleText);
	newWrapper.appendChild(newBox7);

	const newPriceQuantity = document.createElement("div");
	newPriceQuantity.className = 'flex-container';
	newPriceQuantity.innerHTML = '<span class="price">$12.00</span> <input class="quantity" type="text" value="1">';

	const newDescription = document.createElement("p");
	newDescription.className = 'description';
	let DescriptionText = document.createTextNode('Recharge your skin with the super energizing power of finely crushed tourmaline powder blended with natural complexion');
	newDescription.appendChild(DescriptionText);

	const newButton = document.createElement("div");
	newButton.className = 'button';
	let ButtonText = document.createTextNode('Add to cart');
	newButton.appendChild(ButtonText);

	const newLink = document.createElement("a");
	let LinkText = document.createTextNode('Learn More');
	newLink.appendChild(LinkText);

	newLayout.appendChild(newWrapper);
	newHead.appendChild(newLayout);
	newItem.appendChild(newHead);
	newItem.appendChild(newTitle);
	newItem.appendChild(newPriceQuantity);
	newItem.appendChild(newDescription);
	newItem.appendChild(newButton);
	newItem.appendChild(newLink);	

	const container = document.getElementsByClassName("container");
	container[0].insertBefore(newItem,null);
}

function Remove(){
	const collection = document.querySelectorAll('.item');
	if(collection.length>0){
		collection[0].remove();
	}	
}