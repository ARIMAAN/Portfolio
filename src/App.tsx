import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ThemeProvider } from "./contexts/ThemeContext";
import { Navigation } from "./components/Navigation";
import Portfolio from "./pages/Portfolio";
import NotFound from "./pages/not-found";
import { useEffect, useState } from "react";
// Update the import path if the alias "@" is not configured or incorrect
import { Preloader } from "./components/Preloader";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Portfolio} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  // Quotes for the footer
  const quotes = [
    '“The only way to do great work is to love what you do.” — Steve Jobs',
    '“Code is like humor. When you have to explain it, it’s bad.” — Cory House',
    '“Any sufficiently advanced technology is indistinguishable from magic.” — Arthur C. Clarke',
    '“Stay hungry, stay foolish.” — Steve Jobs',
    '“Talk is cheap. Show me the code.” — Linus Torvalds',
    '“Engineers are Brahma.” - S. Muraleedharan',
    '“Engineering is the closest thing to magic that exists in the world.” — Elon Musk',
    '“The engineer has been, and is, a maker of history.” — James Kip Finch',
    '“To invent, you need a good imagination and a pile of junk.” — Thomas Edison',
    '“The scientist discovers a new type of material or energy and the engineer discovers a new use for it.” — Gordon Lindsay Glegg',
    '“Engineering or technology is all about using the power of science to make life better for people, to reduce cost, to improve comfort, to improve productivity, etc.” — N. R. Narayana Murthy',
    '“Engineering is not only study of 45 subjects but it is moral studies of intellectual life.” — Prakhar Srivastav',
    '“Engineers create solutions to the world’s problems using math, science, and technology.” — Dean Kamen',
    '“The ideal engineer is a composite… He is not a scientist, he is not a mathematician, he is not a sociologist or a writer; but he may use the knowledge and techniques of any or all of these disciplines in solving engineering problems.” — N. W. Dougherty',
    '“An engineer is someone who can do for a dime what any fool can do for a dollar.” — Arthur M. Wellington',
    '“The future belongs to the few of us still willing to get our hands dirty.” — Chris Sacca',
    '“Engineering is the art of directing the great sources of power in nature for the use and convenience of man.” — Thomas Tredgold',
    '“Science is about knowing; engineering is about doing.” — Henry Petroski',
    '“Engineering stimulates the mind. Kids get bored easily. They have got to get out and get their hands dirty: make things, dismantle things, fix things. When the schools can offer that, you’ll have an engineer for life.” — Bruce Dickinson',
    '“I am an engineer. I serve mankind by making dreams come true.” — Fahad Basheer',
    '“Engineers like to solve problems. If there are no problems handily available, they will create their own problems.” — Scott Adams',
    '“The engineer has been, and is, a maker of history.” — James Kip Finch',
    '“The scientist discovers a new type of material or energy and the engineer discovers a new use for it.” — Gordon Lindsay Glegg',
    '“The engineering is long, the inspiration is short.” — Kevin Ashton',
    '“The engineer has been, and is, a maker of history.” — James Kip Finch',
    '“Engineering is the art of directing the great sources of power in nature for the use and convenience of man.” — Thomas Tredgold',
    '“Scientists dream about doing great things. Engineers do them.” — James A. Michener',
    '“Engineering is not only study of 45 subjects but it is moral studies of intellectual life.” — Prakhar Srivastav',
    '“Engineers create solutions to the world’s problems using math, science, and technology.” — Dean Kamen',
    '“The ideal engineer is a composite… He is not a scientist, he is not a mathematician, he is not a sociologist or a writer; but he may use the knowledge and techniques of any or all of these disciplines in solving engineering problems.” — N. W. Dougherty',
    '“An engineer is someone who can do for a dime what any fool can do for a dollar.” — Arthur M. Wellington',
    '“The future belongs to the few of us still willing to get our hands dirty.” — Chris Sacca',
    '“Engineering is the art of directing the great sources of power in nature for the use and convenience of man.” — Thomas Tredgold',
    '“Science is about knowing; engineering is about doing.” — Henry Petroski',
    '“Engineering stimulates the mind. Kids get bored easily. They have got to get out and get their hands dirty: make things, dismantle things, fix things. When the schools can offer that, you’ll have an engineer for life.” — Bruce Dickinson',
    '“I am an engineer. I serve mankind by making dreams come true.” — Fahad Basheer',
    '“Engineers like to solve problems. If there are no problems handily available, they will create their own problems.” — Scott Adams',
    '“The engineer has been, and is, a maker of history.” — James Kip Finch',
    '“Engineering is the art of directing the great sources of power in nature for the use and convenience of man.” — Thomas Tredgold',
    '“The ideal engineer is a composite… He is not a scientist, he is not a mathematician, he is not a sociologist or a writer; but he may use the knowledge and techniques of any or all of these disciplines in solving engineering problems.” — N. W. Dougherty',
    '“Scientists dream about doing great things. Engineers do them.” — James A. Michener',
    '“The engineering is long, the inspiration is short.” — Kevin Ashton',
    '“An engineer is someone who can do for a dime what any fool can do for a dollar.” — Arthur M. Wellington',
    // Programming quotes
    'Give someone a program; you frustrate them for a day; teach them how to program, and you frustrate them for a lifetime – David Leinweber',
    'Don’t comment bad code – rewrite it – Brian Kernighan',
    'No one in the brief history of computing has ever written a piece of perfect software. It’s unlikely that you’ll be the first – Andy Hunt',
    'A programming language is for thinking about programs, not for expressing programs you’ve already thought of. It should be a pencil, not a pen – Paul Graham',
    'Sometimes it pays to stay in bed on Monday rather than spending the rest of the week debugging Monday’s code – Dan Salomon',
    'Bad programmers worry about the code. Good programmers worry about data structures and their relationships – Linus Torvalds',
    'Debugging becomes significantly easier if you first admit that you are the problem – William Laeder',
    'It´s better to wait for a productive programmer to become available than it is to wait for the first available programmer to become productive – Steve McConnell',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand – Martin Fowler',
    'One of my most productive days was throwing away 1000 lines of code – Ken Thompson',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it – Rajanand',
    'Everyday life is like programming, I guess. If you love something, you can put beauty into it – Donald Knuth',
    'Everybody in this country should learn to program a computer because it teaches you how to think – Steve Jobs',
    'System programmers are the high priests of a low cult – Robert S. Barton',
    'A good programmer is someone who always looks both ways before crossing a one-way street – Doug Linder',
    'I don’t care if it works on your machine! We are not shipping your machine – Vidiu Platon',
    'Fix the cause, not the symptom – Steve Maguire',
    'Measuring programming progress by lines of code is like measuring aircraft building progress by weight – Bill Gates',
    'In programming, the hard part isn’t solving problems but deciding what problems to solve – Paul Graham',
    'If debudding is the process of removing software bugs, then programming must be the process of putting them in – Edsger W. Dijkstra',
    'First, solve the problem. Then write the code – John Johnson',
    'The computer was born to solve problems that did not exist before – Bill Gates',
    'Make it work, make it right, make it fast – Kent Beck',
    'Always code as if the guy who ends up maintaining your code will be a violent psychopath who knows where you live – Rick Osborne',
    'People don’t care about what you say, they care about what you build – Mark Zuckerberg',
    'As a programmer, it is your job to put yourself out of business. What you do today can be automated tomorrow – Doug McIlroy',
    'We have to stop optimizing for programmers and start optimizing for users – Jeff Atwood',
    'There is a big difference between making a simple product & making a product simple – Des Traynor',
    'If the code and the comments do not match, possibly both are incorrect – Norm Schryer',
    'Before software can be reusable it first has to be usable – Ralph Johnson',
    'If you optimize everything, you will always be unhappy – Donald Knuth',
    'Your mind is programmable – if you’re not programming your mind, else will program it for you – Jeremy Hammond',
    'Experience is the name everyone gives to their mistakes – Oscar Wilde',
    'The trouble with programmers is that you can never tell what a programmer is doing until it’s too late – Seymour Cray',
    'Testing can only prove the presence of bugs, not their absence – Edsger W. Dijkstra',
    'Talk is cheap. Show me the code – Linus Torvalds',
    'The function of a good software is to make the complex appear to be simple – Grady Booch',
    'Your most unhappy customers are your greatest source of learning – Bill Gates',
    'Small minds are concerned with the extraordinary, great minds with the ordinary – Blaise Pascal',
    'Active programming consists of the design of new programs rather than the contemplation of old programs – Niklaus Wirth',
    'Making code does what it’s supposed to do is the easy part. Handling the myriad ways it can go wrong is the real work – Aaron Lozier',
    'Most good programmers do programming not because they expect to get paid or get adulation by the public but because it is fun to program – Linus Torvalds',
    'It is far, far easier to make a correct program fast than to make a fast program correct – Herb Sutter',
    'Every great developer you know got there by solving problems they were unqualified to solve until they actually did it – Patrick McKenzie',
    'If debugging is the process of removing software bugs, then programming must be the process of putting them in – Edsger Dijkstra',
    'C makes it easy to shoot yourself in the foot; C++ makes it harder, but when you do, it blows away your whole leg – Bjarne Stroustrup',
    'Before software can be reusable it first has to be usable – Ralph Johnson',
    'Programs must be written for people to read, and only incidentally for machines to execute – Harold Abelson',
    'In programming, if someone tells you you’re overcomplicating it, they’re either 10 steps behind you or 10 steps ahead of you – Andrew Clark',
    'Truth can only be found in one place: the code – Robert C. Martin'
  ];
  const [quoteIndex, setQuoteIndex] = useState(0);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setQuoteIndex((prev) => (prev + 1) % quotes.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [quotes.length]);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'auto';
    }, 2000);
    return () => {
      clearTimeout(timer);
      document.body.style.overflow = '';
    };
  }, []); 

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider>
        {loading && <Preloader />}
        <div className={`min-h-screen github-bg-primary ${loading ? 'hidden' : ''}`}>
          <Navigation />
          <div className="w-full">
            <Router />
          </div>

          {/* Footer */}
          {!loading && (
            <footer className="github-bg-secondary border-t github-border mt-16">
              <div className="w-full py-8">
                <div className="flex flex-col items-center">
                  <p className="github-text-muted text-base italic text-center min-h-[2.5rem] transition-opacity duration-500">
                    {quotes[quoteIndex]}
                  </p>
                  <p className="github-text-muted text-sm mt-4">
                    © 2025 Bhavan Arimaan. Engineered for tomorrow.
                  </p>
                </div>
              </div>
            </footer>
          )}
        </div>
      </ThemeProvider>
    </QueryClientProvider>
  );
}

export default App;

