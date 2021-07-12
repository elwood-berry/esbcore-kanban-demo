/*
APPLICATION NAME GOES HERE
Author: 'me@elwoodberry.com'
This code is brought to you by Elwood Berry @www.elwoodberry.com 
*/

import { Component } from '@angular/core';

// INTERFACES.
import { Task } from './interfaces/task/task';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public todo: Task[] = [
    {
      title: 'Buy Milk',
      subtitle: 'Go to the store and buy some milk for the corn.',
      description:
        'Milk (also known in unfermented form as sweet milk) is a nutrient-rich liquid food produced by the mammary glands of mammals. It is the primary source of nutrition for young mammals, including breastfed human infants before they are able to digest solid food.'
    },
    {
      title: 'Buy Bread',
      subtitle: 'Go to the store and buy some bread for a sandwich.',
      description:
        'Bread is a staple food prepared from a dough of flour and water, usually by baking. Throughout recorded history, it has been a prominent food in large parts of the world. It is one of the oldest human-made foods, having been of significant importance since the dawn of agriculture, and plays an essential role in both religious rituals and secular culture.'
    }
  ];

  public inProgressList: Task[] = [];

  public doneList: Task[] = [];
}

/*
-------------------------------------------------
Copyright 2021 ElwoodBerry.com LLC. All Rights Reserved.
Use of this source code is governed by an MIT-style license that can be found in the LICENSE file at http://www.elwoodberry.com 

*/
