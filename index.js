const express = require('express');
const app = express();
	

app.use(express.static('public'))
app.set("view engine", "ejs")
app.use(express.static(__dirname + "public"));

app.get("/", function(req, res){
	res.render("pages/index")
})


app.listen(process.env.PORT || 4050, () => {
  console.log(`getting started`);
});
