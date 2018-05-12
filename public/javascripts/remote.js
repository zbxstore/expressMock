
    remote()
    function remote() {
    
        var oHref = window.location.href;
    
        if (oHref.indexOf('https://www.qiang100.com/') > -1) {
            alert('进入百强网')
    
        }
    
    
        if (oHref.indexOf('https://item.jd.com/') > -1) {
            alert('进入京东详情页')
    
        }
    
    
        if (oHref.indexOf('https://detail.tmall.com') > -1) {
            alert('进入天猫详情页')
    
        }
    
        alert('这是远程js');
      
            
        var content = $("<div class='contentQuery'><ul>这是content页面</ul></div>");
        $('body').append(content)
    
    
    }

