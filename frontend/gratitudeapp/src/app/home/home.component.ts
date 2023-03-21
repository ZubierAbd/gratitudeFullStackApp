import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GratserviceService } from '../gratservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  myForm: FormGroup;
  userName: string;
  userGrat: string;

  gratefulQuotes = [
    {
      quote: "Gratitude turns what we have into enough.",
      author: "Anonymous"
    },
    {
      quote: "Gratitude is the fairest blossom which springs from the soul.",
      author: "Henry Ward Beecher"
    },
    {
      quote: "Gratitude is a powerful catalyst for happiness. It’s the spark that lights a fire of joy in your soul.",
      author: "Amy Collette"
    },
    {
      quote: "Gratitude is not only the greatest of virtues but the parent of all others.",
      author: "Marcus Tullius Cicero"
    },
    {
      quote: "In everything, give thanks.",
      author: "1 Thessalonians 5:18"
    },
    {
      quote: "When we focus on our gratitude, the tide of disappointment goes out and the tide of love rushes in.",
      author: "Kristin Armstrong"
    },
    {
      quote: "Gratitude is the memory of the heart.",
      author: "Jean Baptiste Massieu"
    },
    {
      quote: "Gratitude is the sign of noble souls.",
      author: "Aesop"
    },
    {
      quote: "The more grateful I am, the more beauty I see.",
      author: "Mary Davis"
    },
    {
      quote: "Gratitude unlocks the fullness of life. It turns what we have into enough, and more. It turns denial into acceptance, chaos to order, confusion to clarity. It can turn a meal into a feast, a house into a home, a stranger into a friend.",
      author: "Melody Beattie"
    },
    {
      quote: "The roots of all goodness lie in the soil of appreciation for goodness.",
      author: "Dalai Lama"
    },
    {
      quote: "Gratitude is the healthiest of all human emotions. The more you express gratitude for what you have, the more likely you will have even more to express gratitude for.",
      author: "Zig Ziglar"
    },
    {
      quote: "Gratitude is a currency that we can mint for ourselves and spend without fear of bankruptcy.",
      author: "Fred De Witt Van Amburgh"
    },
    {
      quote: "Gratitude is the ability to experience life as a gift. It liberates us from the prison of self-preoccupation.",
      author: "John Ortberg"
    },
    {
      quote: "Gratitude is a powerful force. It can turn negative energy into positive energy. It can change how we feel inside. It can brighten our day.",
      author: "RVM"
    },
    {
      quote: "Gratitude is the antidote to fear.",
      author: "Sarah Ban Breathnach"
    },
    {
      quote: "Gratitude is not only the greatest of virtues, but the parent of all others.",
      author: "Cicero"
    },
    {
      quote: "Gratitude is the wine for the soul. Go on. Get drunk.",
      author: "Rumi"
    },
    {
      quote: "Gratitude is the best attitude.",
      author: "Unknown"
    },
    {
      quote: "Gratitude is a quality similar to electricity: it must be produced and discharged and used up in order to exist at all.",
      author: "William Faulkner"
    },
    {
      quote: "Gratitude is not a passive response to something we have been given, gratitude arises from paying attention, from being awake in the presence of everything that lives within and without us",
      author: "David Whyte"
    },
    {
      quote: "Gratitude makes sense of our past, brings peace for today, and creates a vision for tomorrow.",
      author: "Melody Beattie"
    },
    {
      quote: "Gratitude is a powerful catalyst for positive change. It illuminates and energizes, and transforms our lives in ways we never thought possible.",
      author: "Robert Emmons"
    },
    {
      quote: "Gratitude is the key to a happy life. It opens the door to the power, the wisdom, the creativity of the universe. You open the door through gratitude.",
      author: "Deepak Chopra"
    },
    {
      quote: "Gratitude is riches. Complaint is poverty.",
      author: "Doris Day"
    },
    {
      quote: "Gratitude is the most exquisite form of courtesy.",
      author: "Jacques Maritain"
    },
    {
      quote: "Gratitude is a quality similar to love. It must be nurtured, maintained, and cherished if it is to flourish.",
      author: "David Steindl-Rast"
    },
    {
      quote: "Gratitude is the fairest blossom which springs from the soul.",
      author: "Henry Ward Beecher"
    },
    {
      quote: "Gratitude is an attitude that hooks us up to our source of supply. And the more grateful you are, the closer you become to your maker, to the architect of the universe, to the spiritual core of your being. It’s a phenomenal lesson.",
      author: "Bob Proctor"
    },
    {
      quote: "Gratitude is the appreciation of things that are not deserved, earned, or demanded.",
      author: "James Altucher"
    },
    {
      quote: "Gratitude turns what we have into enough, and more. It turns denial into acceptance, chaos into order, confusion into clarity...it makes sense of our past, brings peace for today, and creates a vision for tomorrow.",
      author: "Melody Beattie"
    },
    {
      quote: "The present moment is filled with joy and happiness. If you are attentive, you will see it.",
      author: "Thich Nhat Hanh"
    },
    {
      quote: "Mindfulness isn’t difficult, we just need to remember to do it.",
      author: "Sharon Salzberg"
    },
    {
      quote: "The mind is everything; what you think, you become.",
      author: "Buddha"
    },
    {
      quote: "Mindfulness is simply being aware of what is happening right now without wishing it were different; enjoying the pleasant without holding on when it changes (which it will); being with the unpleasant without fearing it will always be this way (which it won’t).",
      author: "James Baraz"
    },
    {
      quote: "Mindfulness is the aware, balanced acceptance of the present experience. It isn’t more complicated than that. It is opening to or receiving the present moment, pleasant or unpleasant, just as it is, without either clinging to it or rejecting it.",
      author: "Sylvia Boorstein"
    },
    {
      quote: "Be happy in the moment, that's enough. Each moment is all we need, not more.",
      author: "Mother Teresa"
    },
    {
      quote: "Mindfulness is about love and loving life. When you cultivate this love, it gives you clarity and compassion for life, and your actions happen in accordance with that.",
      author: "Jon Kabat-Zinn"
    },
    {
      quote: "The mind is a superb instrument if used rightly. Used wrongly, however, it becomes very destructive.",
      author: "Eckhart Tolle"
    },
    {
      quote: "Mindfulness practice is simple and completely feasible, says Sakyong Mipham Rinpoche. 'Just by sitting and doing nothing, we are doing a tremendous amount.'",
      author: "Sakyong Mipham Rinpoche"
    },
    {
      quote: "Mindfulness is the aware, balanced acceptance of the present experience. It isn’t more complicated than that. It is opening to or receiving the present moment, pleasant or unpleasant, just as it is, without either clinging to it or rejecting it.",
      author: "Sylvia Boorstein"
    },
    {
      quote: "The little things? The little moments? They aren’t little.",
      author: "Jon Kabat-Zinn"
    },
    {
      quote: "In today's rush, we all think too much--seek too much--want too much--and forget about the joy of just being.",
      author: "Eckhart Tolle"
    },
    {
      quote: "Mindfulness helps you go home to the present. And every time you go there and recognize a condition of happiness that you have, happiness comes.",
      author: "Thich Nhat Hanh"
    },
    {
      quote: "As you become more present in your own life, you will begin to enlighten others by your example.",
      author: "Germany Kent"
    },
    {
      quote: "If you want to conquer the anxiety of life, live in the moment, live in the breath.",
      author: "Amit Ray"
    }]

  selectedQuote = {
    author: "",
    quote: ""
  }

  allGrats: any = [];

  getRandomQuote = () => {
    let rng = Math.floor(Math.random() * this.gratefulQuotes.length)
    this.selectedQuote = this.gratefulQuotes[rng]
  }

  ngOnInit() {
    this.getRandomQuote();
    this.getAllGrats();
    this.myForm = new FormGroup({
      'name': new FormControl('', [Validators.required, Validators.minLength(3)]),
      'text': new FormControl('', [Validators.required, Validators.minLength(3)])
    })
  }

  getAllGrats() {
    this.gs.getAllGrats().subscribe(data => {
      this.allGrats = data;
    });
  }

  setGrat() {
    if (!this.userGrat) {
      return;
    }
    let body = {
      text: this.userGrat,
      name: this.userName ? this.userName : 'Anonymous'
    }
    this.gs.setGrat(body).subscribe((res) => {
      this.getAllGrats();
      this.userGrat = '';
      this.userName = '';
    })
  }

  constructor(private gs: GratserviceService) { }


}
