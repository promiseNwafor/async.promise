export interface Post {
  slug: string;
  title: string;
  date: string;
  excerpt: string;
  content: string;
  readingTime: string;
  tags?: string[];
  author?: string;
}

export function getAllPosts(): Post[] {
  // Always return sample posts for now to avoid server/client issues
  return getSamplePosts();
}

export function getPostBySlug(slug: string): Post | null {
  const posts = getSamplePosts();
  return posts.find((post: Post) => post.slug === slug) || null;
}

// Sample posts for when no content directory exists or for client-side
function getSamplePosts(): Post[] {
  return [
    {
      slug: 'awaiting-the-future-of-ai-coding',
      title: 'Awaiting: The Future of AI-Powered Coding',
      date: '2024-01-15',
      excerpt: 'From GitHub Copilot to Claude Dev, exploring the emerging landscape of AI coding assistants and what they mean for software engineers.',
      content: `# Awaiting: The Future of AI-Powered Coding

The async revolution in software development isn't just about promises and callbacks anymore. We're witnessing the emergence of AI that fundamentally changes how we write, review, and think about code.

## The Promise of AI Assistants

AI coding tools like GitHub Copilot, Claude Dev, and Cursor are more than glorified autocomplete. They're becoming true pair programming partners:

- **Context-aware suggestions** that understand your entire codebase
- **Natural language to code** translation that feels magical
- **Intelligent refactoring** that maintains functionality while improving structure
- **Bug detection** that catches issues before they reach production

## The Async Nature of AI Development

Working with AI tools introduces a new kind of async workflow:

\`\`\`javascript
// Traditional development
const solution = thinkHard(problem);
implement(solution);

// AI-assisted development  
const aiSuggestion = await ai.suggest(problem);
const refinedSolution = iterate(aiSuggestion, expertise);
await implement(refinedSolution);
\`\`\`

## What's Coming Next

The tools on the horizon promise even more:
- **Multi-modal AI** that can read designs and generate code
- **Autonomous debugging** that fixes issues while you sleep
- **AI-driven architecture** decisions based on best practices
- **Predictive testing** that writes tests before bugs appear

## The Human Promise

Despite the AI revolution, the human element remains crucial. We're not being replaced—we're being elevated to focus on creativity, architecture, and solving bigger problems.

The future isn't about AI replacing developers. It's about developers and AI working in async harmony, each awaiting the other's contributions to create something greater than the sum of its parts.`,
      readingTime: '6 min read',
      tags: ['ai', 'coding-assistants', 'github-copilot', 'future-tech'],
      author: 'async.promise'
    },
    {
      slug: 'resolving-ai-integration-challenges',
      title: 'Resolving: Common AI Integration Pitfalls in Production',
      date: '2024-01-10',
      excerpt: 'Real-world lessons from integrating AI APIs into production systems. From rate limiting nightmares to prompt engineering best practices.',
      content: `# Resolving: Common AI Integration Pitfalls in Production

Integrating AI into production systems is like debugging async code—full of subtle timing issues and unexpected edge cases. Here's what I've learned from the trenches.

## The Rate Limiting Reality

AI APIs aren't like traditional REST endpoints. They have unique characteristics:

\`\`\`typescript
// Naive approach (will fail)
const responses = await Promise.all(
  requests.map(req => openai.complete(req))
);

// Production-ready approach
const responses = await pLimit(5)(
  requests.map(req => async () => {
    try {
      return await openai.complete(req);
    } catch (error) {
      if (error.status === 429) {
        await exponentialBackoff();
        return retry(req);
      }
      throw error;
    }
  })
);
\`\`\`

## Prompt Engineering Anti-Patterns

1. **Over-specification**: Trying to control every detail
2. **Under-context**: Not providing enough background
3. **Brittle formatting**: Relying on exact output structure
4. **Missing fallbacks**: No graceful degradation

## Cost Management Strategies

AI API costs can spiral quickly. Essential patterns:

- **Request deduplication** for similar queries
- **Response caching** with smart invalidation
- **Usage monitoring** with automatic alerts
- **Progressive enhancement** that works without AI

## The Testing Challenge

How do you test non-deterministic AI responses?

\`\`\`typescript
// Test the structure, not the content
expect(response).toMatchSchema({
  summary: expect.any(String),
  confidence: expect.any(Number),
  tags: expect.arrayOf(String)
});

// Test business logic with mocked responses
mockAI.mockResolvedValue(predictableResponse);
\`\`\`

## Production Monitoring

Monitor what matters:
- Response times and timeouts
- Token usage patterns
- Error rates by model
- Quality metrics through user feedback

The key is treating AI as another async dependency—with proper error handling, monitoring, and graceful degradation.`,
      readingTime: '8 min read',
      tags: ['ai-integration', 'production', 'api-design', 'monitoring'],
      author: 'async.promise'
    },
    {
      slug: 'catching-ai-limitations',
      title: 'Catching: When AI Promises Fall Short',
      date: '2024-01-05',
      excerpt: 'A critical look at AI limitations in software development. Understanding when to rely on AI and when human expertise is irreplaceable.',
      content: `# Catching: When AI Promises Fall Short

Not every AI promise resolves successfully. Like any async operation, AI tools can timeout, return unexpected results, or fail entirely. Here's how to handle the catch blocks.

## The Overpromise Problem

AI marketing often promises more than reality delivers:

\`\`\`javascript
// 
// 
// promise
const perfectCode = await ai.generateApplication(vague_description);

// Reality
try {
  const roughDraft = await ai.generateCode(detailed_specs);
  const workingCode = await human.review(roughDraft);
  const productionCode = await human.refactor(workingCode);
} catch (limitation) {
  console.log("Human expertise required");
}
\`\`\`

## Where AI Consistently Struggles

### Complex System Architecture
AI excels at local optimizations but struggles with:
- Cross-service dependencies
- Performance implications at scale
- Long-term maintainability tradeoffs

### Domain-Specific Knowledge
Generic AI models miss nuances in:
- Financial regulations
- Healthcare compliance
- Industry-specific best practices

### Creative Problem Solving
AI follows patterns it's seen before. It struggles with:
- Novel algorithmic approaches
- Breakthrough architectural decisions
- Paradigm shifts in thinking

## The Hallucination Factor

AI confidence doesn't correlate with accuracy:

\`\`\`typescript
interface AIResponse {
  content: string;
  confidence: number; // This can be misleading!
}

// Always validate AI outputs
const validateAICode = async (code: string) => {
  const syntaxValid = await linter.check(code);
  const logicValid = await testSuite.run(code);
  const securityValid = await securityScan(code);
  
  return syntaxValid && logicValid && securityValid;
};
\`\`\`

## Building Robust AI Workflows

1. **Validate everything**: Never trust AI output blindly
2. **Human checkpoints**: Critical decisions need human review
3. **Graceful degradation**: Systems should work without AI
4. **Continuous learning**: Update training with real-world feedback

## The Signal vs Noise Problem

AI generates a lot of output. Learning to filter:
- **Signal**: Novel insights, time-saving automations
- **Noise**: Obvious suggestions, incorrect implementations

## A Balanced Perspective

AI is a powerful tool, not a silver bullet. The most successful teams:
- Use AI to amplify human capabilities
- Maintain healthy skepticism
- Focus on problems AI solves well
- Keep humans in the critical path

Remember: every promise can be rejected. The key is handling those rejections gracefully and learning from them.`,
      readingTime: '7 min read',
      tags: ['ai-limitations', 'critical-thinking', 'best-practices', 'reality-check'],
      author: 'async.promise'
    },
    {
      slug: 'async-ai-development-patterns',
      title: 'Async AI: Design Patterns for AI-First Development',
      date: '2024-01-01',
      excerpt: 'Design patterns and architectural approaches for building robust applications with AI at their core. From circuit breakers to prompt chains.',
      content: `# Async AI: Design Patterns for AI-First Development

Building AI-first applications requires new patterns. Just as we developed design patterns for async programming, we need patterns for AI integration.

## The Circuit Breaker Pattern

Protect your app from AI service failures:

\`\`\`typescript
class AICircuitBreaker {
  private failureCount = 0;
  private lastFailure?: Date;
  private state: 'closed' | 'open' | 'half-open' = 'closed';

  async callAI(prompt: string): Promise<string> {
    if (this.state === 'open') {
      if (this.shouldAttemptReset()) {
        this.state = 'half-open';
      } else {
        throw new Error('Circuit breaker is open');
      }
    }

    try {
      const result = await this.aiService.call(prompt);
      this.onSuccess();
      return result;
    } catch (error) {
      this.onFailure();
      throw error;
    }
  }
}
\`\`\`

## The Prompt Chain Pattern

Break complex tasks into manageable steps:

\`\`\`typescript
class PromptChain {
  async processDocument(content: string) {
    const summary = await this.ai.summarize(content);
    const keyPoints = await this.ai.extractKeyPoints(summary);
    const categories = await this.ai.categorize(keyPoints);
    
    return {
      summary,
      keyPoints,
      categories
    };
  }
}
\`\`\`

## The Response Validation Pattern

Always validate AI outputs:

\`\`\`typescript
interface ValidationRule<T> {
  validate(response: T): boolean;
  errorMessage: string;
}

class AIResponseValidator<T> {
  constructor(private rules: ValidationRule<T>[]) {}

  validate(response: T): void {
    for (const rule of this.rules) {
      if (!rule.validate(response)) {
        throw new Error(rule.errorMessage);
      }
    }
  }
}
\`\`\`

## The Fallback Chain Pattern

Progressive degradation for AI failures:

\`\`\`typescript
class FallbackChain {
  async generateResponse(prompt: string): Promise<string> {
    try {
      return await this.gpt4.generate(prompt);
    } catch {
      try {
        return await this.gpt3.generate(prompt);
      } catch {
        return await this.templateResponse(prompt);
      }
    }
  }
}
\`\`\`

## The Context Window Manager

Handle token limits gracefully:

\`\`\`typescript
class ContextManager {
  private maxTokens: number;

  async optimizeContext(messages: Message[]): Promise<Message[]> {
    let tokenCount = this.countTokens(messages);
    
    while (tokenCount > this.maxTokens) {
      // Remove oldest non-system messages first
      messages = this.removeOldestUserMessage(messages);
      tokenCount = this.countTokens(messages);
    }
    
    return messages;
  }
}
\`\`\`

## The Async Promise Pattern

Combine multiple AI operations:

\`\`\`typescript
class AsyncAIOrchestrator {
  async processUserRequest(request: UserRequest) {
    const [
      sentiment,
      intent,
      entities
    ] = await Promise.allSettled([
      this.analyzeSentiment(request.text),
      this.detectIntent(request.text),
      this.extractEntities(request.text)
    ]);

    return this.combineResults({
      sentiment: sentiment.status === 'fulfilled' ? sentiment.value : null,
      intent: intent.status === 'fulfilled' ? intent.value : null,
      entities: entities.status === 'fulfilled' ? entities.value : []
    });
  }
}
\`\`\`

These patterns help build resilient AI applications that handle the async, unpredictable nature of AI services while maintaining good user experience.`,
      readingTime: '9 min read',
      tags: ['design-patterns', 'ai-architecture', 'async-programming', 'best-practices'],
      author: 'async.promise'
    }
  ];
} 