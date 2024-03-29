# Cheat sheet for the AI OVHcloud CLI ovhai

This cheat sheet shows you useful ovhai CLI commands.

Here is an example of the cheat sheet:   
![An extract of the cheat sheet](./doc/assets/example.png) 

## Pre-requisites

To edit and update the cheat sheet in PDF you need to install:
  - [nodejs](https://nodejs.org/)
  - [yargs](http://yargs.js.org/): `$ npm i yargs --save`

Then, run `$ npm install` that will install everything you need to execute `asciidoctorpdf`.

The executable binary of `asciidoctopdf` is in `bin/` folder. If you want, you can download it from [its own repository](https://github.com/asciidoctor/asciidoctor-pdf).

# Howto's

To generate the cheat sheet:

`$ ./bin/asciidoctorjs-pdf ovhai-cheat-sheet.adoc --template-require ../templates/cheat-sheet/template/template.js`

or:

`$ make run`

# Configuration
 
# Hacking
 
You've juste to add / update information in the `ovhai-cheat-sheet.adoc`. 

## Get the sources
 
```bash
    git clone https://github.com/ovh/ovhai-cheat-sheet.git
    cd ovhai-cheat-sheet
```
 
You've developed a new cool feature? Fixed an annoying bug? We'd be happy
to hear from you!
 
Have a look in [CONTRIBUTING.md](https://github.com/ovh/ovhai-cheat-sheet/blob/master/CONTRIBUTING.md)

## Tests
 
The cheat sheet must fit on a A4 page in landscape mode. 

# Related links
 
 * Contribute: https://github.com/ovh/ovhai-cheat-sheet/blob/master/CONTRIBUTING.md
 * Report bugs: https://github.com/ovh/ovhai-cheat-sheet/issues
 * Get latest version: https://github.com/ovh/ovhai-cheat-sheet/blob/master/ovhai-cheat-sheet.pdf
 
# License
 
Copyright 2023 OVH SAS
 
Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at
 
    http://www.apache.org/licenses/LICENSE-2.0
 
Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
