## aire-faker

Simple ES6 module to create fake/mock data during prototyping/development. Aire-faker allows you to begin and/or continue working while the underlying backend services or APIs for fetching data are not yet available during your development. Further it allows you to work while offline or during slow/unreliable APIs. Aire-faker offers instantaneous and consistent response during no or poor connectivity so you can continue working. Lastly, it eliminates inter-team dependencies so you can start coding immediately then swtich to the real APIs when they become avaialable.

The initial release (v0.1.0) offers a variety of ES6 static functions for generating random, realistic data including personal info, address, credentials, education (colleges), work history (companies), digital footprint (blogs/comments), and more as listed below.

This initiative was inspired by faker.js

## Installation

Using npm:
```
$ npm install --save aire-faker
```

Using yarn:
```
$ yarn add aire-faker
```

## Usage

In Node.js:
``` js
import faker from 'aire-faker'
```

## Person
``` js
faker.person.fullName()
// -> 'Brian Coleman'

faker.person.firstName()
// -> 'Daniel'

faker.person.middleName()
// -> 'Steve'

faker.person.maleName()
// -> 'Travis'

faker.person.femaleName()
// -> 'Kathryn'

faker.person.lastName()
// -> 'Peterson'

faker.person.avatar()
// -> 'https://s3.amazonaws.com/uifaces/faces/twitter/travishines/128.jpg'

faker.person.maleAvatar()
// -> 'https://s3.amazonaws.com/uifaces/faces/twitter/carlosgavina/128.jpg'

faker.person.femaleAvatar()
// -> 'https://s3.amazonaws.com/uifaces/faces/twitter/laurengray/128.jpg'

faker.person.email()
// -> 'brandon.lewis@juno.com'

faker.person.phone()
// -> '(812) 945-9225'

faker.person.status()
// -> 'single'

faker.person.dob()
// -> 
{ 
 dob: 'Mar 28, 1977', 
 age: 41 
}

faker.person.toJSON()
// ->
{
  firstName: 'Peter',
  middleName: 'Allen',
  lastName: 'Price',
  phone: '(119) 287-6721',
  email: 'peter.price@gmail.us',
  dob: 'Jan 5, 1966',
  age: 52,
  gender: 'male',
  status: 'married',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/adhamdannaway/128.jpg'
}
```

## Address
``` js
faker.address.address()
// -> '8288 Pine Street'

faker.address.state()
// -> 'New York'

faker.address.stateAbbrev()
// -> 'CA'

faker.address.city()
// -> 'Alexandria Bay'

faker.address.zip()
// -> 79345

faker.address.toString()
// -> 
`9118 Sycamore Court
Newport, California 27713`

faker.address.toJSON()
// ->
{
  street: '8163 Main Road',
  city: 'Georgetown',
  state: 'Mississippi',
  zip: 15197,
  locale: 'Georgetown, Mississippi 15197'
}
```

## Blog
``` js
faker.blog.author()
// -> 'Allen Lewis'

faker.blog.title()
// -> 'Vestibulum quis sem non erat pretium aliquam.'

faker.blog.body()
// -> 'Donec sed vestibulum mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra cursus neque, nec ultricies arcu tristique non. Suspendisse id convallis libero. Aliquam at vestibulum justo. Quisque varius elit eget accumsan aliquam. Sed tincidunt, mi placerat imperdiet vulputate, enim sapien accumsan lorem, efficitur varius nibh leo pharetra nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec sit amet placerat massa, vitae blandit lacus. Nullam ultrices eget lorem in tincidunt. Nulla gravida lacus id blandit malesuada. Praesent dui ante, scelerisque in ante in, bibendum pharetra purus. Proin non nulla quis justo feugiat varius in eu lacus. Aenean vitae sapien faucibus, ornare orci in, facilisis velit. Quisque facilisis nulla aliquet, volutpat est sit amet, malesuada augue. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Fusce sit amet mauris semper nisi volutpat luctus et non leo. Praesent euismod neque vel dapibus varius. Sed sed leo felis. In in pretium augue. Phasellus ultricies mollis nulla, ac facilisis elit hendrerit ut. Curabitur suscipit id libero sit amet dapibus. Donec faucibus commodo felis. Nulla nisl est, consectetur interdum hendrerit et, aliquam vestibulum nisi. Morbi magna lectus, dapibus fringilla molestie a, malesuada vel risus. Phasellus ut ante eu eros elementum elementum at non urna. In pellentesque lacus nec tempor condimentum. In hac habitasse platea dictumst. Fusce enim risus, ultricies ac odio ac, varius porta orci.'

faker.blog.date()
// -> 'Jan 12, 2018'

faker.blog.likes()
// -> 104

faker.blog.toJSON()
// -> 
{
  author: 'Alexander Johnson',
  created: 'Oct 7, 2016',
  title: 'Donec nec turpis eget turpis lobortis rhoncus.',
  body: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque in ex eget quam dignissim bibendum ac malesuada ante. Curabitur nisl magna, rhoncus aliquet quam id, pellentesque ultricies sem. Fusce varius, purus ullamcorper dapibus placerat, diam diam fermentum est, eu efficitur justo justo sed lorem. Donec feugiat, nunc id iaculis egestas, ex velit semper mauris, sed placerat libero ex in leo. Duis interdum quam sed dolor vehicula iaculis. Fusce fermentum tristique dolor, vitae porta nisi tincidunt a. Suspendisse a quam vel augue iaculis tincidunt. Ut sagittis finibus accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu laoreet neque. Nam viverra libero vitae pretium sollicitudin. Nam ultricies dui lectus, a viverra tortor venenatis in. Sed pharetra ex in mauris cursus pretium. Sed mattis velit eget eleifend porttitor. Fusce magna lorem, euismod quis ornare lobortis, convallis vel felis. Nulla facilisi. Proin consectetur sit amet tellus et viverra.\nNam condimentum tincidunt quam, non ornare turpis egestas commodo. Sed convallis nisl eu neque iaculis imperdiet. Fusce volutpat arcu ac nulla tincidunt laoreet vel eu ipsum. Duis ultricies neque eu accumsan ornare. Aliquam ut ligula in massa elementum posuere nec eu ligula. Cras feugiat odio vitae ante tristique lobortis. Phasellus eu mauris sollicitudin, ullamcorper urna vitae, cursus sapien. Integer accumsan magna nec malesuada efficitur.\nSed sed tincidunt odio, vel rutrum ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam nisi sapien, ornare sed justo sit amet, mollis vestibulum nunc. Integer tellus orci, elementum eget dolor et, tincidunt fringilla diam. Morbi iaculis lorem eget luctus efficitur. Ut porttitor leo in orci vulputate malesuada. Cras sodales ex risus. Aliquam enim nunc, iaculis et laoreet ac, placerat vel eros. Nunc tempor, ex vitae porttitor tincidunt, massa libero ultrices tellus, sit amet vehicula velit erat sed dui. Nullam et pharetra augue.\nMauris lobortis ligula tellus, nec consequat mi commodo sit amet. Donec lacinia rutrum nunc, vel ultricies augue dictum ut. In luctus pulvinar massa, vitae feugiat tellus ornare sed. Duis fringilla auctor libero sit amet condimentum. Aliquam efficitur urna non metus interdum, eu posuere lacus pellentesque. Aenean tristique massa quis elit laoreet iaculis. Aliquam non ante nec enim consectetur consectetur non nec urna. Suspendisse ut arcu ultricies, tincidunt tellus hendrerit, mattis nunc. Donec at purus massa. Ut et arcu pellentesque quam commodo semper. Praesent dictum congue nibh, quis mollis orci volutpat in. Nullam varius non lorem a faucibus. Nunc in finibus ligula, non elementum mauris. Cras sem nibh, vulputate blandit felis in, pulvinar tincidunt quam. Morbi in luctus magna.\nNam condimentum tincidunt quam, non ornare turpis egestas commodo. Sed convallis nisl eu neque iaculis imperdiet. Fusce volutpat arcu ac nulla tincidunt laoreet vel eu ipsum. Duis ultricies neque eu accumsan ornare. Aliquam ut ligula in massa elementum posuere nec eu ligula. Cras feugiat odio vitae ante tristique lobortis. Phasellus eu mauris sollicitudin, ullamcorper urna vitae, cursus sapien. Integer accumsan magna nec malesuada efficitur.',
  likes: 106,
  comments:
   [ { author: 'Gary Nelson',
       date: 'Apr 6, 2018',
       message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur sodales, ligula a consectetur laoreet, odio magna euismod neque, eu rhoncus enim odio vel nulla. Aliquam erat volutpat.\nIn ipsum nisl, suscipit sagittis rutrum quis, molestie non mauris. Fusce facilisis pharetra ante et accumsan.Sed sit amet dui nisl. Donec ullamcorper metus erat, non interdum libero porta eu. Morbi nulla risus, euismod ac iaculis eu, placerat eget turpis. Donec nulla risus, dictum ac eleifend blandit, dictum vel odio. Etiam id ex lorem. Vestibulum orci eros, vehicula a metus eget, cursus fermentum nunc.',
       likes: 373 },
     { author: 'Alexander James',
       date: 'Sep 16, 2017',
       message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur sodales, ligula a consectetur laoreet, odio magna euismod neque, eu rhoncus enim odio vel nulla. Aliquam erat volutpat.\nAenean tristique dolor in laoreet tempor. Suspendisse nec elit sed leo gravida vehicula. Proin scelerisque idmagna fringilla efficitur. Quisque in semper ex. Etiam facilisis enim non sapien ullamcorper, id hendrerit ligula ultrices. Nam semper consectetur tellus, id volutpat ligula tincidunt sit amet.',
       likes: 615 },
     { author: 'Mike Butler',
       date: 'Jul 25, 2017',
       message: 'Fusce pretium viverra porta. Mauris sed facilisis arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas porttitor dolor in nibh porta aliquet. Proin sagittis tortor vitae neque imperdiet consectetur.\nSed nec lacinia ipsum, pulvinar commodo ante. Ut vel fermentum quam. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Nullam eu nulla elementum, vulputate leo sed, eleifend risus.',
       likes: 366 
      }
    ]
}
```

## Comment
``` js
faker.comment.author()
// -> 'Adam Slater'

faker.comment.date()
// -> 'Oct 7, 2017'

faker.comment.message()
// -> 'Curabitur venenatis ipsum nec enim sodales, a hendrerit nunc consequat. Suspendisse potenti. Nullam diam diam, ornare sed dui et, interdum vehicula erat. Sed ac viverra diam, non posuere neque. Aliquam vitae tellus eu ante convallis posuere nec at eros. Maecenas commodo lacus odio, eget venenatis tortor egestas eget. Nam cursus ornare lectus eu mollis. Sed vestibulum consequat maximus.'

faker.comment.likes()
// -> 548

faker.comment.toJSON()
// -> 
{
  author: 'Peter Barker',
  date: 'Sep 12, 2017',
  message: 'Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Curabitur sodales, ligula a consectetur laoreet, odio magna euismod neque, eu rhoncus enim odio vel nulla. Aliquam erat volutpat.\nFusce eleifend neque sit amet lacus consequat condimentum. Praesent dui enim, blandit eu ultrices vitae, hendreritac ligula. Quisque a ligula cursus lectus facilisis pretium. Sed sodales sem id diam tempus congue.',
  likes: 300
}
```

## College
``` js
faker.college.name()
// -> 'Richards Medical College'

faker.college.abbrev()
// -> 'CSU'

faker.college.description()
// -> 'Suspendisse vel urna nec sapien tempor ultricies. Integer rhoncus commodo magna eu pretium. Donec mattis sodales condimentum. Praesent dui nisl, iaculis in risus eu, tempus vestibulum est. Vivamus sit amet congue odio. Nunc a ante at quam commodo eleifend. Donec a nulla eget purus rutrum aliquam id vel urna. Mauris justo est, tincidunt ac tortor ut, tempus sagittis odio.'

faker.college.type()
// -> 'public'

faker.college.founded()
// -> 1935

faker.college.address()
// -> 
{ street: '6529 Lake Street',
  city: 'Clinton',
  state: 'Tennessee',
  zip: 95236,
  locale: 'Clinton, Tennessee 95236' 
}

faker.college.email()
// -> 'contact@hvc.edu'

faker.college.phone()
// -> '(812) 539-8143'

faker.college.major()
// -> 'Nuclear Engineering'

faker.college.degree()
// -> 'Bachelor\'s Degree'

faker.college.enrolled()
// -> 
{ startDate: 'Sep 1, 2008',
  endDate: 'May 17, 2012',
  gradDate: 'May 25, 2012' 
}

faker.college.studentJSON()
// ->
{ name: 'Northern State Univerity',
  description: 'Sed sed tincidunt odio, vel rutrum ex. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Aliquam nisi sapien, ornare sed justo sit amet, mollis vestibulum nunc. Integer tellus orci, elementum eget dolor et, tincidunt fringilla diam. Morbi iaculis lorem eget luctus efficitur. Ut porttitor leo in orci vulputate malesuada. Cras sodales ex risus. Aliquam enim nunc, iaculis et laoreet ac, placerat vel eros. Nunc tempor, ex vitae porttitor tincidunt, massa libero ultrices tellus, sit amet vehicula velit erat sed dui. Nullam et pharetra augue.',
  founded: 1951,
  type: 'public',
  email: 'contact@hsu.edu',
  phone: '(684) 135-9235',
  address:
   { street: '5631 Aspen Court',
     city: 'Livonia',
     state: 'Lousiana',
     zip: 99288,
     locale: 'Livonia, Lousiana 99288' 
    },
  dates:
   { startDate: 'Sep 1, 2008',
     endDate: 'May 17, 2012',
     gradDate: 'May 25, 2012' 
    },
  degree: 'Master\'s Degree',
  major: 'Rehabilitation Services' 
}

faker.college.collegeJSON()
// ->
{ name: 'Raft College',
  description: 'Donec tempor justo id nulla eleifend, ut blandit sem venenatis. Donec gravida nibh nec luctus venenatis. In porta vehicula lectus quis tempus. In et pharetra est. Integer consequat a tortor in hendrerit. Ut nec ipsum in enim tempor dictum sit amet vel nulla. Nunc vitae iaculis neque. Sed euismod sagittis quam, non lobortis urnamattis eget. Aenean nec felis at nulla lobortis faucibus. Curabitur venenatis ipsum nec enim sodales, a hendrerit nunc consequat. Suspendisse potenti. Nullam diam diam, ornare sed dui et, interdum vehicula erat. Sed ac viverra diam, non posuere neque. Aliquam vitae tellus eu ante convallis posuere nec at eros. Maecenas commodo lacus odio, egetvenenatis tortor egestas eget. Nam cursus ornare lectus eu mollis. Sed vestibulum consequat maximus.',
  founded: 1897,
  type: 'public',
  email: 'contact@su.edu',
  phone: '(277) 682-9786',
  address:
   { street: '6618 Lake Avenue',
     city: 'Washington',
     state: 'Florida',
     zip: 14117,
     locale: 'Washington, Florida 14117' 
    } 
}
```

## Company
``` js
faker.company.name()
// -> 'GameCenter CX'

faker.company.industry()
// -> 'Pharmaceutical'

faker.company.description()
// -> 'Donec sed vestibulum mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra cursus neque, nec ultricies arcu tristique non. Suspendisse id convallis libero. Aliquam at vestibulum justo. Quisque varius elit eget accumsan aliquam. Sed tincidunt, mi placerat imperdiet vulputate, enim sapien accumsan lorem, efficitur varius nibh leo pharetra nulla.'

faker.company.founded()
// -> 1965

faker.company.email()
// -> 'info@adiposeindustries.com'

faker.company.phone()
// -> '(132) 432-8464'

faker.company.address()
// ->
{ street: '1442 Park Street',
  city: 'Clinton',
  state: 'South Carolina',
  zip: 72844,
  locale: 'Clinton, South Carolina 72844' 
}

faker.company.title()
// -> 'Lead Manufacturing Engineer'

faker.company.department()
// -> 'Web Infrastucture'

faker.company.duties()
// -> 'Donec consectetur metus vitae pretium ullamcorper. Nam sit amet tortor eget felis maximus cursus a pharetra ipsum. Pellentesque posuere turpis nec purus vestibulum accumsan. Cras laoreet est at vehicula aliquet. Vestibulum porttitor nisl eleifend, aliquet elit eget, finibus ipsum.'

faker.company.duration()
// -> 
{ 
  startDate: 'Sep 1, 2015', 
  endDate: 'May 17, 2022' 
}

faker.company.employeeJSON()
// ->
{
  name: 'Cross Technological Enterprises',
  description: 'Etiam interdum laoreet nibh nec vehicula. Morbi id tincidunt nisl. Pellentesque et sapien commodo, commodo eros et, viverra metus. Integer interdum diam eget enim condimentum rhoncus. Vivamus accumsan neque eget quam dignissim hendrerit. Maecenas vitae urna tempor, interdum lorem in, consectetur ipsum. Proin sed enim facilisis odio elementum consectetur eu vitae dolor. Praesent id diam ut urna euismod interdum id id purus. Aenean quis dui ut ligula malesuada porttitor non non lorem.',
  department: 'Engineering',
  title: ' Administrative Manager',
  duties: 'Donec tincidunt dolor nec ullamcorper finibus. Morbi egestas purus ac erat iaculis, eget varius dolor pulvinar. Duis pellentesque enim quis aliquam interdum. Nullam eget dui gravida, sagittis tortor sit amet, venenatis augue. Duis ut felis sit amet dolor mattis posuere vitae sodales turpis.',
  dates: { startDate: 'Sep 1, 2018', endDate: 'May 17, 2025' }
}

faker.company.companyJSON()
// -> 
{
  name: 'Power Broker',
  industry: 'Chemical',
  description: 'Donec sed vestibulum mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra cursus neque, nec ultricies arcu tristique non. Suspendisse id convallis libero. Aliquam at vestibulum justo. Quisque varius elit eget accumsan aliquam. Sed tincidunt, mi placerat imperdiet vulputate, enim sapien accumsan lorem, efficitur varius nibh leo pharetra nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec sit amet placerat massa, vitae blandit lacus. Nullam ultrices eget lorem in tincidunt. Nulla gravida lacus id blandit malesuada. Praesent dui ante, scelerisque in ante in, bibendum pharetra purus. Proin non nulla quis justo feugiat varius in eu lacus. Aenean vitae sapien faucibus, ornare orci in, facilisis velit. Quisque facilisis nulla aliquet, volutpat est sit amet, malesuada augue.',
  started: 1946,
  email: 'info@contoso.com'
  phone: '(458) 987-1714',
  address:
  {
    street: '1474 Washington Court',
    city: 'Milton',
    state: 'Vermont',
    zip: 58439,
    locale: 'Milton, Vermont 58439'
  }
}
```

## Email
``` js
faker.email.person()
// -> 'carmen.peterson@earthlink.us'

faker.email.college()
// -> 'contact@hsu.edu'

faker.email.company()
// -> 'info@roxxonenergycorporation.com'
```

## Lorem
``` js
faker.lorem.words()
// -> 'porttitor nisi vulputate odio maecenas'

faker.lorem.lists()
// -> 
`Aenean congue eros eget iaculis facilisis.\n
In consequat ante sed leo elementum, vel convallis orci scelerisque.\n
Donec finibus quam et mi placerat ornare.\n
Mauris aliquet purus vel rutrum ultricies.\n
In aliquam ligula sed nibh venenatis luctus.`

faker.lorem.short()
// ->
`Suspendisse eu magna accumsan, vehicula ipsum a, dapibus tellus. Ut pretium, lorem ac tristique mollis, urna quam hendrerit nulla, eu posuere ante dui in leo. Donec dignissim enim nec quam lacinia consequat. Nulla convallis faucibus sem vitae sodales. Quisque ac arcu lacus. Maecenas non rutrum enim.\n
Aenean tincidunt hendrerit arcu non mollis. Cras sed feugiat nibh, in viverra eros. Ut fringilla est ut mattis interdum. Nulla et suscipit nibh. Vestibulum malesuada vestibulum facilisis.\n
Duis porta iaculis odio, id posuere nisl vulputate eget. Sed sed luctus ante. Quisque at sem tellus. Vestibulum est urna, suscipit ut luctus a, imperdiet ullamcorper ligula.\n
Curabitur justo dolor, laoreet nec eleifend sit amet, cursus vel nibh. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc eros velit, mollis non consequat id, molestie ut lacus. Etiam in luctus diam.\n
Fusce pretium viverra porta. Mauris sed facilisis arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas porttitor dolor in nibh porta aliquet. Proin sagittis tortor vitae neque imperdiet consectetur.`

faker.lorem.long()
// ->
`Donec sed vestibulum mi. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Maecenas viverra cursus neque, nec ultricies arcu tristique non. Suspendisse id convallis libero. Aliquam at vestibulum justo. Quisque varius elit eget accumsan aliquam. Sed tincidunt, mi placerat imperdiet vulputate, enim sapien accumsan lorem, efficitur varius nibh leo pharetra nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Donec sit amet placerat massa, vitae blandit lacus. Nullam ultrices eget lorem in tincidunt. Nulla gravida lacus id blandit malesuada. Praesent dui ante, scelerisque in ante in, bibendum pharetra purus. Proin non nulla quis justo feugiat varius in eu lacus. Aenean vitae sapien faucibus, ornare orci in, facilisis velit. Quisque facilisis nulla aliquet, volutpat est sit amet, malesuada augue.\n
Etiam interdum laoreet nibh nec vehicula. Morbi id tincidunt nisl. Pellentesque et sapien commodo, commodo eros et, viverra metus. Integer interdum diam eget enim condimentum rhoncus. Vivamus accumsan neque eget quam dignissim hendrerit. Maecenas vitae urna tempor, interdum lorem in, consectetur ipsum. Proin sed enim facilisis odio elementum consectetur eu vitae dolor. Praesent id diam ut urna euismod interdum id id purus. Aenean quis dui ut ligula malesuada porttitor non non lorem.\n
Sed laoreet purus non posuere scelerisque. Proin id dui feugiat, egestas lacus vitae, lacinia justo. Nullam eget sagittis orci, ut faucibus mauris. Proin congue metus sit amet bibendum luctus. Pellentesque dapibus commodo nisi laoreet luctus. Donec posuere risus ut felis dapibus hendrerit. Proin facilisis ligula sed justo fringilla suscipit. Maecenas semper ligula mauris, ut vestibulum tortor egestas vitae. Fusce at arcu leo. Nullam mollis nibh sit amet venenatis tincidunt.\n
Etiam interdum laoreet nibh nec vehicula. Morbi id tincidunt nisl. Pellentesque et sapien commodo, commodo eros et, viverra metus. Integer interdum diam eget enim condimentum rhoncus. Vivamus accumsan neque eget quam dignissim hendrerit. Maecenas vitae urna tempor, interdum lorem in, consectetur ipsum. Proin sed enim facilisis odio elementum consectetur eu vitae dolor. Praesent id diam ut urna euismod interdum id id purus. Aenean quis dui ut ligula malesuada porttitor non non lorem.\n
Sed laoreet purus non posuere scelerisque. Proin id dui feugiat, egestas lacus vitae, lacinia justo. Nullam eget sagittis orci, ut faucibus mauris. Proin congue metus sit amet bibendum luctus. Pellentesque dapibus commodo nisi laoreet luctus. Donec posuere risus ut felis dapibus hendrerit. Proin facilisis ligula sed justo fringilla suscipit. Maecenas semper ligula mauris, ut vestibulum tortor egestas vitae. Fusce at arcu leo. Nullam mollis nibh sit amet venenatis tincidunt.`
```


## Credential
``` js
const interval = { startDate: new Date(1960, 0, 1), endDate: new Date(1980, 0, 1) }
const education = { include: true, count: 1 }
const employment = { include: true, count: 2 }
const blog = { include: true, count: 2 }
const comment = { include: true, count: 3 }
const options = { gender: 0, dobInterval: interval, address: true, education, employment, blog, comment }

faker.credential.person(options)
// -> 
{
  firstName: 'Roy',
  middleName: 'Dave',
  lastName: 'Jenkins',
  phone: '(678) 554-1724',
  email: 'roy.jenkins@zoho.edu',
  dob: 'Apr 20, 1962',
  age: 56,
  gender: 'male',
  status: 'Divorced',
  avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/sethlouey/128.jpg',
  address:
  {
    street: '2392 Church Road',
    city: 'Greenville',
    state: 'Texas',
    zip: 84844,
    locale: 'Greenville, Texas 84844'
  },
  education:
    [{
      name: 'Columbus State Univeristy',
      description: 'Donec vel laoreet diam. Mauris et justo dapibus, cursus urna in, vehicula ipsum. Nulla nec facilisis ipsum. Maecenas aliquet erat in posuere finibus. Vivamus venenatis maximus dictum. Aliquam laoreet, leo sed congue dictum, mi odio commodo libero, ac molestie eros massa a dui. Fusce quis massa a risus commodo tempor et faucibus sem. Aliquam vel posuere lectus. Phasellus egestas, lacus id semper tincidunt, magna quam pretium risus, a sodales tellus leo nec purus. Aenean in finibus orci. Morbi nec ante eu augue tincidunt viverra. Vivamus malesuada, tortor a rhoncus lobortis, mi enim ultrices massa, ut ultricies dolor felis sed nibh.',
      founded: 1891,
      type: 'public',
      email: 'contact@nsu.edu',
      phone: '(957) 762-3782',
      address:
      {
        street: '9236 Main Boulevard',
        city: 'Greenville',
        state: 'Hawaii',
        zip: 65665,
        locale: 'Greenville, Hawaii 65665'
      },
      dates:
      {
        startDate: 'Sep 1, 2008',
        endDate: 'May 17, 2012',
        gradDate: 'May 25, 2012'
      },
      degree: 'Bachelor\'s Degree',
      major: 'Psychology'
    }],
  employment:
    [{
      name: 'GameCenter CX',
      description: 'Suspendisse a augue consequat, lobortis diam quis, tempor justo. Maecenas sed tempus leo. Donec eu mattis neque. Proin iaculis enim at posuere volutpat. Sed justo magna, bibendum nec dui sit amet, lacinia congue dolor. Vestibulum vehicula nec urna nec vestibulum. Morbi fringilla cursus condimentum. Suspendisse sit amet arcu maximus, elementum odio nec, varius eros. Cras at eros at nibh imperdiet semper ut at elit. Aenean mattis ut risus rhoncus aliquet. Cras tincidunt nisl dui, in volutpat magna posuere in. Suspendisse at libero in massa suscipit pellentesque consequat quis eros. Etiam ac molestie eros, in accumsan nunc. Nam pretium diam tristique ipsum consequat, at facilisis massa consectetur. Sed iaculis, neque eu condimentum consequat, neque velit mollis elit, nec fringilla felis sem id libero. Phasellus a lacinia neque.',
      department: 'Engineering',
      title: 'Senior Mining Safety Engineer',
      duties: 'Ut placerat mauris in augue gravida sagittis. Ut auctor sapien quis purus scelerisque bibendum. Proin eget risus mollis, faucibus velit nec, iaculis lacus. Aenean vel enim at eros egestas fermentum euismod at turpis. Cras tempor augue at eros viverra gravida.',
      dates: { startDate: 'Sep 1, 2014', endDate: 'May 17, 2021' }
    },
    {
      name: 'Parker Industries',
      description: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Pellentesque in ex eget quam dignissim bibendum ac malesuada ante. Curabitur nisl magna, rhoncus aliquet quam id, pellentesque ultricies sem. Fusce varius, purus ullamcorper dapibus placerat, diam diam fermentum est, eu efficitur justo justo sed lorem. Donec feugiat, nunc id iaculis egestas, ex velit semper mauris, sed placerat libero ex in leo. Duis interdum quam sed dolor vehicula iaculis. Fusce fermentum tristique dolor, vitae porta nisi tincidunt a. Suspendisse a quam vel augue iaculis tincidunt. Ut sagittis finibus accumsan. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus eu laoreet neque. Nam viverra libero vitae pretium sollicitudin. Nam ultricies dui lectus, a viverra tortor venenatis in. Sed pharetra ex in mauris cursus pretium. Sed mattis velit eget eleifend porttitor. Fusce magna lorem, euismod quis ornare lobortis, convallis vel felis. Nulla facilisi. Proin consectetur sit amet tellus et viverra.',
      department: 'Engineering',
      title: 'Principle Stationary Engineer',
      duties: 'Nulla bibendum diam at tortor sagittis pharetra. Fusce vel arcu quis nibh semper ullamcorper. Sed eu dui vel erat pulvinar fringilla ac eu tellus. Maecenas efficitur neque eget magna faucibus, vel vestibulum turpis molestie. Suspendisse euismod erat id massa congue, at viverra velit condimentum.',
      dates: { startDate: 'Sep 1, 2013', endDate: 'May 17, 2020' }
    }],
  blogs:
    [{
      author: 'Gene Hayes',
      created: 'Oct 25, 2017',
      title: 'In et elit laoreet, varius velit vel, pharetra risus.',
      body: `Sed libero leo, elementum in bibendum et, pharetra a leo. Vivamus efficitur sit amet ligula sagittis efficitur. Donec a velit non nibh tincidunt viverra et non arcu. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi rhoncus condimentum arcu sed consectetur. Donec non odio eget est posuere pretium in vitae lacus. Aenean quis tincidunt nunc, nec vestibulum justo. Nulla accumsan facilisis consectetur. Aliquam neque nibh, maximus at dictum at, tincidunt et velit. Phasellus rhoncus ligula non est rhoncus, vel egestas nibh feugiat. Suspendisse ac ultricies nibh, a tempor elit. Praesent et nunc id nibh maximus pellentesque vitae in turpis.\n
      Fusce pretium viverra porta. Mauris sed facilisis arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas porttitor dolor in nibh porta aliquet. Proin sagittis tortor vitae neque imperdiet consectetur. Nullam pulvinar turpis id vestibulum tristique. Vivamus vehicula convallis lacus eget egestas. Suspendisse in metus velit. Morbi est sapien, ornare et iaculis et, cursus at tortor.\n
      Nunc et tincidunt diam, ultrices euismod mauris. Integer pulvinar diam ut nisi fermentum placerat. Morbi sagittis mauris vestibulum, consectetur massa in, varius lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Nunc vulputate, quam ut sagittis ultrices, lacus nisl placerat orci, vitae sagittis nunc nunc non felis. Fusce dapibus ligula id ante ullamcorper laoreet. Quisque finibus volutpat iaculis. Maecenas nisi purus, dapibus condimentum nisi eu, accumsan aliquet felis. Mauris suscipit elit venenatis, congue nisl eget, fermentum lorem.\n
      In et varius eros. Phasellus malesuada ipsum ut eleifend consectetur. Nunc facilisis nisi felis, ac mattis tortor vehicula quis. Nulla augue libero, cursus a cursus in, suscipit ut ex. Nunc non lacus ante. Pellentesque facilisis orci turpis, tempus gravida leo tempus vel. Aenean tristique dolor in laoreet tempor. Suspendisse nec elit sed leo gravida vehicula. Proin scelerisque id magna fringilla efficitur. Quisque in semper ex. Etiam facilisis enim non sapien ullamcorper, id hendrerit ligula ultrices. Nam semper consectetur tellus, id volutpat ligula tincidunt sit amet. Nulla aliquam aliquam nibh eget hendrerit. Fusce vulputate tortor mi, ut feugiat nisi fringilla at. Ut lobortis risus nec vehicula semper. Donec elementum arcu turpis, eget molestie odio finibus in. Aliquam elementum elementum sagittis. Nullam sit amet scelerisque dolor, in lobortis sem. Etiam imperdiet convallis tincidunt. Nunc nec accumsan urna. Sed luctus erat nec erat placerat, vitae finibus sem pharetra.\n
      Donec vel laoreet diam. Mauris et justo dapibus, cursus urna in, vehicula ipsum. Nulla nec facilisis ipsum. Maecenas aliquet erat in posuere finibus. Vivamus venenatis maximus dictum. Aliquam laoreet, leo sed congue dictum, mi odio commodo libero, ac molestie eros massa a dui. Fusce quis massa a risus commodo tempor et faucibus sem. Aliquam vel posuere lectus. Phasellus egestas, lacus id semper tincidunt, magna quam pretium risus, a sodales tellus leo nec purus. Aenean in finibus orci. Morbi nec ante eu augue tincidunt viverra. Vivamus malesuada, tortor a rhoncus lobortis, mi enim ultrices massa, ut ultricies dolor felis sed nibh.`,
      likes: 293,
      comments:
        [{
          author: 'Adam Hayes',
          date: 'Jun 10, 2017',
          message: `Fusce pretium viverra porta. Mauris sed facilisis arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas porttitor dolor in nibh porta aliquet. Proin sagittis tortor vitae neque imperdiet consectetur.\n
          Donec non odio eget est posuere pretium in vitae lacus. Aenean quis tincidunt nunc, nec vestibulum justo. Nulla accumsan facilisis consectetur. Aliquam neque nibh, maximus at dictum at, tincidunt et velit. Phasellus rhoncus ligula non est rhoncus, vel egestas nibh feugiat. Suspendisse ac ultricies nibh, a tempor elit. Praesent et nunc id nibh maximus pellentesque vitae in turpis.`,
          likes: 576
        },
        {
          author: 'Richard Barker',
          date: 'Oct 12, 2016',
          message: `Aliquam vestibulum libero et nulla auctor tempus tempor id erat. Morbi malesuada erat quis urna sagittis, sed placerat metus volutpat. Mauris at justo sapien. Donec lacus neque, pharetra ac ullamcorper nec, pretium vel ex.\n
          Duis porta iaculis odio, id posuere nisl vulputate eget. Sed sed luctus ante. Quisque at sem tellus. Vestibulum est urna, suscipit ut luctus a, imperdiet ullamcorper ligula.`,
          likes: 462
        }]
    },
    {
      author: 'Benjamin Hall',
      created: 'Jul 26, 2016',
      title: 'Vestibulum laoreet metus sed orci congue fermentum.',
      body: `In et varius eros. Phasellus malesuada ipsum ut eleifend consectetur. Nunc facilisis nisi felis, ac mattis tortor vehicula quis. Nulla augue libero, cursus a cursus in, suscipit ut ex. Nunc non lacus ante. Pellentesque facilisis orci turpis, tempus gravida leo tempus vel. Aenean tristique dolor in laoreet tempor. Suspendisse nec elit sed leo gravida vehicula. Proin scelerisque id magna fringilla efficitur. Quisque in semper ex. Etiam facilisis enim non sapien ullamcorper, id hendrerit ligula ultrices. Nam semper consectetur tellus, id volutpat ligula tincidunt sit amet. Nulla aliquam aliquam nibh eget hendrerit. Fusce vulputate tortor mi, ut feugiat nisi fringilla at. Ut lobortis risus nec vehicula semper. Donec elementum arcu turpis, eget molestie odio finibus in. Aliquam elementum elementum sagittis. Nullam sit amet scelerisque dolor, in lobortis sem. Etiam imperdiet convallis tincidunt. Nunc nec accumsan urna. Sed luctus erat nec erat placerat, vitae finibus sem pharetra.\n
      Donec odio sapien, consectetur quis tellus nec, bibendum dignissim odio. Curabitur scelerisque, diam in tristique tincidunt, risus elit accumsan mauris, vel scelerisque enim augue sit amet felis. Mauris volutpat quam quis metus lacinia, vitae cursus enim ultrices. Vivamus massa erat, tristique sed mattis eu, pretium sed dui. Pellentesque sit amet tortor dictum, feugiat augue vel, sollicitudin lectus. Praesent rutrum et velit at fringilla. Morbi non metus efficitur, dictum arcu vitae, mattis arcu. Duis ligula eros, hendrerit a semper at, dignissim et quam. Sed bibendum maximus nunc, ac porta mi dignissim quis. Vivamus feugiat posuere metus ac efficitur. Mauris non auctor turpis, vel convallis lacus. Nunc vehicula cursus elit, sed egestas leo ultricies a. Praesent eu iaculis ipsum. Nam imperdiet consequat quam, sit amet dapibus nunc dignissim in.\n
      Fusce pretium viverra porta. Mauris sed facilisis arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas porttitor dolor in nibh porta aliquet. Proin sagittis tortor vitae neque imperdiet consectetur. Nullam pulvinar turpis id vestibulum tristique. Vivamus vehicula convallis lacus eget egestas. Suspendisse in metus velit. Morbi est sapien, ornare et iaculis et, cursus at tortor.\n
      Donec vel euismod eros. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Maecenas ipsum tellus, porttitor eu augue vel, vehicula sollicitudin odio. Nullam consequat, sem sed pretium fringilla, ligula enim auctor diam, non placerat ante arcu a neque. Nullam sit amet euismod felis, non facilisis odio. Maecenas justo metus, dapibus et scelerisque ac, tempor vel mauris. Maecenas elementum fringilla sollicitudin. Duis nec dolor suscipit, rutrum libero vitae, euismod ante. Ut neque nisi, euismod et dapibus a, venenatis vel orci. Fusce porta metus ut rhoncus cursus. Sed quis faucibus sapien. Aliquam id justo lacus.\n
      Nulla ullamcorper feugiat felis, a blandit justo posuere id. Donec risus arcu, pellentesque eget augue vitae, pulvinar ullamcorper urna. Duis non justo aliquam, molestie nisl id, posuere metus. Suspendisse eget malesuada velit, eget varius elit. Proin molestie risus ac aliquet elementum. Nunc vitae velit a urna tincidunt luctus. Etiam id elementum mauris. Nunc condimentum orci tincidunt enim volutpat eleifend. Mauris nulla lectus, congue sed ipsum sed, pretium molestie metus. Nullam enim orci, consectetur egestas lectus at, imperdiet hendrerit mauris. Nulla facilisi. Aliquam tristique arcu sed justo rutrum, ac ultricies orci tincidunt.`,
      likes: 47,
      comments:
        [{
          author: 'Dave Torres',
          date: 'Mar 1, 2017',
          message: `Sed mollis, leo et mattis pellentesque, lectus odio fermentum ligula, non tincidunt lorem lacus quis lacus. Etiam urna enim, lobortis vitae augue et, posuere mollis massa.\n
          Pellentesque vestibulum tempor justo et fringilla. Quisque non urna ut nibh consequat luctus. Pellentesque elementum in nisl ac pellentesque. Morbi dictum tempus posuere. Quisque tortor eros, condimentum ut ex vel, dignissim tincidunt augue.`,
          likes: 900
        },
        {
          author: 'calvin Davis',
          date: 'May 13, 2017',
          message: `Cras ut tristique arcu, eget porttitor justo. Proin interdum magna tellus, nec fringilla nisi viverra fermentum. Integer lorem elit, placerat nec venenatis non, elementum vel leo. Nullam ipsum ante, sollicitudin vitae sem ut, ullamcorper gravida enim. Cras a volutpat nibh.\n
          In auctor turpis vel pretium efficitur. Sed lobortis massa eget accumsan bibendum. Suspendisse ut dolor at ipsum laoreet laoreet.`,
          likes: 683
        },
        {
          author: 'Glenn Johnson',
          date: 'Aug 21, 2018',
          message: `Aliquam non varius justo. Donec lobortis accumsan est, id mattis mauris sodales eget. Vivamus rutrum at enim eu fringilla. Sed lectus erat, sagittis sit amet luctus scelerisque, aliquam dignissim leo. Aliquam euismod, turpis viverra dapibus congue, lectus dolor cursus massa, ac tristique arcu diam id est.\n
          Nunc vulputate, quam ut sagittis ultrices, lacus nisl placerat orci, vitae sagittis nunc nunc non felis. Fusce dapibus ligula id ante ullamcorper laoreet. Quisque finibus volutpat iaculis. Maecenas nisi purus, dapibus condimentum nisi eu, accumsan aliquet felis. Mauris suscipit elit venenatis, congue nisl eget, fermentum lorem.`,
          likes: 287
        }]
    }],
  comments:
    [{
      author: 'Roy Watson',
      date: 'Jul 8, 2017',
      message: `Nulla ullamcorper feugiat felis, a blandit justo posuere id. Donec risus arcu, pellentesque eget augue vitae, pulvinar ullamcorper urna. Duis non justo aliquam, molestie nisl id, posuere metus. Suspendisse eget malesuada velit, eget varius elit.\n
      Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Praesent vitae tellus et eros tempor fermentum. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos.`,
      likes: 441
    },
    {
      author: 'Sean Morgan',
      date: 'Mar 27, 2017',
      message: `Fusce pretium viverra porta. Mauris sed facilisis arcu. Interdum et malesuada fames ac ante ipsum primis in faucibus. Maecenas porttitor dolor in nibh porta aliquet. Proin sagittis tortor vitae neque imperdiet consectetur.\n
      Nunc vulputate, quam ut sagittis ultrices, lacus nisl placerat orci, vitae sagittis nunc nunc non felis. Fusce dapibus ligula id ante ullamcorper laoreet. Quisque finibus volutpat iaculis. Maecenas nisi purus, dapibus condimentum nisi eu, accumsan aliquet felis. Mauris suscipit elit venenatis, congue nisl eget, fermentum lorem.`,
      likes: 487
    },
    {
      author: 'Steve Morgan',
      date: 'Jun 5, 2016',
      message: `Aliquam vestibulum libero et nulla auctor tempus tempor id erat. Morbi malesuada erat quis urna sagittis, sed placerat metus volutpat. Mauris at justo sapien. Donec lacus neque, pharetra ac ullamcorper nec, pretium vel ex.\n
      Maecenas vel dapibus turpis. Nam sodales dapibus cursus. Praesent lectus eros, dapibus ac mollis et, ultrices id nisi. Morbi viverra, augue sit amet suscipit porttitor, turpis orci ultrices mi, vitae condimentum purus lorem eget urna.`,
      likes: 158
    }]
}
```

## Tooling
```
Babel
Chai assert/expect
Eslint
Istanbul (nyc)
Mersenne
Mocha
```


## Development
```
yarn test
yarn lint
yarn coverage
```