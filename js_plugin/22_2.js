var S22 = {
chapterInit: 	function (cw, mw) {
			pipe = '|';
			cid = cw.substr(cw.lastIndexOf("/")+1);
			var data = nav.get(mw, '');
			rSd = /ajax\(\{[^\$]+?su/gm;
			sData = rSd.exec(data);
			var met = '';
			rHe = /setRequestHeader\("([^"]+)", "([^"]+)"\)/gm;
			ehe = rHe.exec(sData);
			met = '|' + ehe[1] + '|' + ehe[2];
			rHe = /'([^']+)'\s*:\s*"([^"]+)"/g;
			ehe = rHe.exec(data);
			met = met + '|' + ehe[1] + '|' + ehe[2];
//			ehe = rHe.exec(data);
			rTo = /"csrf-token" content="([^"]+)/gm
			met = met + '|X-CSRF-TOKEN|' + rTo.exec(data)[1] ;
			rUr = /l:\s*['"]([^'"]+)[^\}]+:[^;,}]+/gm;
			rUr.exec(data);
			var ur = rUr.exec(data)[1];
			tDta = /data:\{[\s\S]+?\}/gm;
			data = tDta.exec(data);
			rSd = /["']([^"']+)["']:([^,\}]+)/gm;
			sd = rSd.exec(data);
			var pt = sd[1];
			sd = rSd.exec(data);
			pt = pt + '|' + cid + '|' + sd[1] + '|' + sd[2].trim();
			data = nav.post(ur, 'Referer|' + mw + '|X-Requested-With|XMLHttpRequest' + met, pt);
			rId =/\/viewer\/([^/]+)/gm;
			var id = rId.exec(data)[1];
			src = nav.get("https://tmofans.com/viewer/" + id + "/cascade", 'Referer|' + cw);
			rImg = /<img src="(https:\/\/img1.tmofans.com\/[^"]+)/gm;
			oImg = "https://tmofans.com/viewer/" + id + "/cascade";
			do {
				i = rImg.exec(src);
				if (i) {
					oImg = oImg + pipe + i[1];
				}
			} while (i);
			return oImg;
		},
cre1: 		function(){
			return "<div class=\"col-10 text-truncate\"[$s$S]+?(<.+?</a>)[$s$S]+?\"(\\d+)\" ";
		},
cre2: 		function(){
			return "<div class=\"col-4 col-md-6 text-truncate\">([^']+)</span>[$s$S]+?\"(\\d+)\" ";
		},
};