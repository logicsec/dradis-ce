# Welcome to the Dradis Framework

[ ![Build Status](https://codeship.com/projects/f06cef90-a1ae-0133-d7a5-465166e508dd/status?branch=master)](https://codeship.com/projects/128584)
[ ![Code quality](https://codeclimate.com/github/dradis/dradis-ce/badges/gpa.svg)](https://codeclimate.com/github/dradis/dradis-ce)
[ ![Black Hat Arsenal](https://www.toolswatch.org/badges/arsenal/2016.svg)](https://www.blackhat.com/us-16/arsenal.html#dradis-framework)

Dradis is an open-source collaboration framework, tailored to InfoSec teams.


## Our goals

* Share the information effectively.
* Easy to use, easy to be adopted. Otherwise it would present little benefit over other systems.
* Flexible: with a powerful and simple extensions interface.
* Small and portable. You should be able to use it while on site (no outside connectivity). It should be OS independent (no two testers use the same OS).


## Some of the features:

* Platform independent
* Markup support for the notes: text styles, code blocks, images, links, etc.
* Integration with existing systems and tools:
  * [Brakeman](https://dradisframework.com/ce/addons/brakeman.html)
  * [Burp Suite](https://dradisframework.com/ce/addons/burp.html)
  * [MediaWiki](https://dradisframework.com/ce/addons/mediawiki.html)
  * [Metasploit](https://dradisframework.com/ce/addons/metasploit.html)
  * [Nessus](https://dradisframework.com/ce/addons/nessus.html)
  * [NeXpose](https://dradisframework.com/ce/addons/nexpose.html)
  * [Nikto](https://dradisframework.com/ce/addons/nikto.html)
  * [Nmap](https://dradisframework.com/ce/addons/nmap.html)
  * [OpenVAS](https://dradisframework.com/ce/addons/openvas.html)
  * [OSVDB](https://dradisframework.com/ce/addons/osvdb.html)
  * [Qualys](https://dradisframework.com/ce/addons/qualys.html)
  * [Retina](https://dradisframework.com/ce/addons/retina.html)
  * [SAINT](https://dradisframework.com/ce/addons/saint.html)
  * [SureCheck](https://dradisframework.com/ce/addons/surecheck.html)
  * [VulnDB](https://dradisframework.com/ce/addons/vulndb.html)
  * [w3af](https://dradisframework.com/ce/addons/w3af.html)
  * [wXf](https://dradisframework.com/ce/addons/wxf.html)
  * [Zed Attack Proxy](https://dradisframework.com/ce/addons/zap.html)
  * ...
  * [Full list](http://dradisframework.org/addons/)


## Editions

There are two editions of Dradis Framework:

* **Dradis Framework Community Edition (CE)**: open-source and available freely under the GPLv2 license.
* **Dradis Framework Professional Edition (Pro)**: includes extra features that are more useful for organizations dealing with bigger teams and multiple projects at a time. To use Pro and get official support please [become a subscriber](https://dradisframework.com/pro/).


## Getting started: Community Edition

### Git release (recommended)

```
$ git clone https://github.com/logicsec/dradis-custom.git
$ cd dradis-ce/
$ ruby bin/setup
$ bundle exec rails server
```

You can browse to the app at http://localhost:3000/


## License

Dradis Framework Community Edition is released under [GNU General Public License version 2.0](http://www.gnu.org/licenses/old-licenses/gpl-2.0.html)

Dradis Framework Professional Edition is released under a commercial license.


## We're hiring

If you love open source, Ruby on Rails and would like to have a lot of freedom and autonomy in your work, maybe you should consider [joining our team](https://dradisframework.com/careers.html) to make Dradis even better.
