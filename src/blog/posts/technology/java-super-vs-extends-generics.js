export default {
  id: 'java-super-vs-extends-generics',
  title: 'Java Generics: super vs extends - Understanding PECS',
  description: 'Learn about the difference between super and extends in Java generics, the PECS principle (Producer Extends Consumer Super), and when to use each.',
  date: '2024-09-24',
  author: 'Tarik',
  categories: ['Computer Science', 'Java', 'Programming'],
  thumbnail: null,
  featured: false,
  keywords: ['java', 'generics', 'wildcards', 'super', 'extends', 'pecs', 'bounded wildcards', 'variance'],
  
  content: `
# Java Generics: super vs extends - Understanding PECS

Understanding the difference between \`? extends T\` and \`? super T\` in Java generics is crucial for writing flexible and type-safe code. This article explains these concepts and the PECS principle.

## The Problem: Invariance

Java generics are **invariant** by default, meaning \`List<String>\` is not a subtype of \`List<Object>\`, even though \`String\` is a subtype of \`Object\`.

\`\`\`java
List<String> strings = new ArrayList<>();
List<Object> objects = strings;  // Compiler error!
// Even though String extends Object, List<String> is not List<Object>
\`\`\`

This is a safety feature, but sometimes we need more flexibility.

## Bounded Wildcards

### ? extends T (Upper Bounded Wildcard)

\`? extends T\` means "unknown type that is a subtype of T (or T itself)".

\`\`\`java
// Can read from, but cannot write to (except null)
List<? extends Number> numbers = new ArrayList<Integer>();
Number num = numbers.get(0);  // OK: Can read as Number
// numbers.add(new Integer(5));  // Compiler error: Cannot write
\`\`\`

**Key Points:**
- **Read operations**: Safe (can read as T or supertype)
- **Write operations**: Not safe (except null)
- **Use case**: When you need to **read/produce** values

### ? super T (Lower Bounded Wildcard)

\`? super T\` means "unknown type that is a supertype of T (or T itself)".

\`\`\`java
// Can write to, but cannot read (except as Object)
List<? super Integer> numbers = new ArrayList<Number>();
numbers.add(new Integer(5));  // OK: Can write Integer
// Integer num = numbers.get(0);  // Compiler error: Cannot read as Integer
Object obj = numbers.get(0);  // OK: Can only read as Object
\`\`\`

**Key Points:**
- **Write operations**: Safe (can write T or subtypes)
- **Read operations**: Limited (can only read as Object)
- **Use case**: When you need to **write/consume** values

## PECS Principle

**PECS**: **Producer Extends, Consumer Super**

- **Producer**: Produces/reads values → Use \`extends\`
- **Consumer**: Consumes/writes values → Use \`super\`

### Producer Example

\`\`\`java
// Producer: Reads from collection
public static double sum(List<? extends Number> numbers) {
    double sum = 0.0;
    for (Number num : numbers) {  // Can read as Number
        sum += num.doubleValue();
    }
    return sum;
}

// Usage
List<Integer> integers = Arrays.asList(1, 2, 3);
List<Double> doubles = Arrays.asList(1.5, 2.5, 3.5);
double sum1 = sum(integers);  // OK
double sum2 = sum(doubles);   // OK
\`\`\`

### Consumer Example

\`\`\`java
// Consumer: Writes to collection
public static void addNumbers(List<? super Integer> numbers) {
    numbers.add(1);  // Can write Integer
    numbers.add(2);
    numbers.add(3);
}

// Usage
List<Number> numbers = new ArrayList<>();
List<Object> objects = new ArrayList<>();
addNumbers(numbers);  // OK
addNumbers(objects);  // OK
\`\`\`

## Detailed Examples

### Example 1: Copy Method

\`\`\`java
// Copy from source (producer) to destination (consumer)
public static <T> void copy(
        List<? extends T> source,  // Producer: extends
        List<? super T> destination) {  // Consumer: super
    for (T item : source) {
        destination.add(item);  // Read from source, write to destination
    }
}

// Usage
List<Integer> source = Arrays.asList(1, 2, 3);
List<Number> destination = new ArrayList<>();
copy(source, destination);  // OK
\`\`\`

### Example 2: Maximum Element

\`\`\`java
// Producer: Reads and compares elements
public static <T extends Comparable<? super T>> T max(List<? extends T> list) {
    if (list.isEmpty()) {
        throw new IllegalArgumentException("List is empty");
    }
    T max = list.get(0);
    for (T item : list) {
        if (item.compareTo(max) > 0) {
            max = item;
        }
    }
    return max;
}

// Usage
List<Integer> integers = Arrays.asList(3, 1, 4, 1, 5);
Integer maxInt = max(integers);  // 5
\`\`\`

### Example 3: Add All

\`\`\`java
// Consumer: Writes multiple elements
public static <T> void addAll(
        List<? super T> destination,  // Consumer: super
        List<? extends T> source) {    // Producer: extends
    destination.addAll(source);
}

// Usage
List<Number> numbers = new ArrayList<>();
List<Integer> integers = Arrays.asList(1, 2, 3);
addAll(numbers, integers);  // OK
\`\`\`

## Common Patterns

### Pattern 1: Collection Utilities

\`\`\`java
public class CollectionUtils {
    // Producer: Read elements
    public static <T> T getFirst(List<? extends T> list) {
        return list.isEmpty() ? null : list.get(0);
    }
    
    // Consumer: Write elements
    public static <T> void addFirst(List<? super T> list, T item) {
        list.add(0, item);
    }
    
    // Both: Read from one, write to another
    public static <T> void transfer(
            List<? extends T> source,
            List<? super T> destination) {
        destination.addAll(source);
    }
}
\`\`\`

### Pattern 2: Comparator Usage

\`\`\`java
// Comparator is a consumer: it consumes two elements
public static <T> void sort(
        List<T> list,
        Comparator<? super T> comparator) {  // Consumer: super
    list.sort(comparator);
}

// Usage
List<String> strings = Arrays.asList("c", "a", "b");
Comparator<Object> objectComparator = (a, b) -> a.toString().compareTo(b.toString());
sort(strings, objectComparator);  // OK: Comparator<Object> can compare Strings
\`\`\`

### Pattern 3: Functional Interfaces

\`\`\`java
import java.util.function.Consumer;
import java.util.function.Function;

// Consumer: super (writes/consumes)
public static <T> void forEach(
        List<? extends T> list,  // Producer: extends
        Consumer<? super T> action) {  // Consumer: super
    for (T item : list) {
        action.accept(item);
    }
}

// Function: extends for input (reads), no bound for output (produces)
public static <T, R> List<R> map(
        List<? extends T> list,  // Producer: extends
        Function<? super T, ? extends R> mapper) {  // Consumer for input, Producer for output
    List<R> result = new ArrayList<>();
    for (T item : list) {
        result.add(mapper.apply(item));
    }
    return result;
}
\`\`\`

## When to Use Each

### Use ? extends T When:

1. **Reading from collection**: You need to read elements
2. **Producer pattern**: Collection produces values
3. **Iterating**: Looping through elements
4. **Returning**: Returning elements from method

\`\`\`java
// Good: Reading/iterating
public static void printNumbers(List<? extends Number> numbers) {
    for (Number num : numbers) {
        System.out.println(num);
    }
}
\`\`\`

### Use ? super T When:

1. **Writing to collection**: You need to add elements
2. **Consumer pattern**: Collection consumes values
3. **Adding elements**: Inserting into collection
4. **Accepting parameters**: Method accepts elements to add

\`\`\`java
// Good: Writing/adding
public static void addIntegers(List<? super Integer> list) {
    list.add(1);
    list.add(2);
    list.add(3);
}
\`\`\`

### Use Unbounded ? When:

1. **Both read and write**: But only as Object
2. **Don't care about type**: Only need Object operations

\`\`\`java
// Unbounded wildcard
public static void process(List<?> list) {
    // Can only use Object methods
    for (Object obj : list) {
        System.out.println(obj.toString());
    }
}
\`\`\`

## Common Mistakes

### Mistake 1: Using extends for Writing

\`\`\`java
// WRONG: Cannot write to ? extends
List<? extends Number> numbers = new ArrayList<Integer>();
// numbers.add(new Integer(5));  // Compiler error!

// CORRECT: Use super for writing
List<? super Integer> numbers2 = new ArrayList<Number>();
numbers2.add(new Integer(5));  // OK
\`\`\`

### Mistake 2: Using super for Reading

\`\`\`java
// WRONG: Cannot read as specific type
List<? super Integer> numbers = new ArrayList<Number>();
// Integer num = numbers.get(0);  // Compiler error!

// CORRECT: Use extends for reading
List<? extends Number> numbers2 = new ArrayList<Integer>();
Number num = numbers2.get(0);  // OK
\`\`\`

### Mistake 3: Forgetting PECS

\`\`\`java
// WRONG: Not using wildcards
public static <T> void copy(List<T> source, List<T> destination) {
    // Less flexible: source and destination must be exactly same type
}

// CORRECT: Using PECS
public static <T> void copy(
        List<? extends T> source,
        List<? super T> destination) {
    // More flexible: source can be subtype, destination can be supertype
}
\`\`\`

## Summary

| Wildcard | Meaning | Read | Write | Use Case |
|----------|---------|------|-------|----------|
| \`? extends T\` | Subtype of T | ✅ (as T) | ❌ | **Producer** (read) |
| \`? super T\` | Supertype of T | ⚠️ (as Object) | ✅ (T) | **Consumer** (write) |
| \`?\` | Any type | ⚠️ (as Object) | ❌ | Don't care about type |

**PECS Principle:**
- **Producer Extends**: Use \`extends\` when reading/producing
- **Consumer Super**: Use \`super\` when writing/consuming

> [!TIP]
> Remember PECS: **P**roducer **E**xtends, **C**onsumer **S**uper. When a collection produces values (you read from it), use \`extends\`. When a collection consumes values (you write to it), use \`super\`. This makes your code more flexible and type-safe.

**Key Takeaway**: Understanding \`extends\` and \`super\` wildcards and the PECS principle allows you to write more flexible, reusable generic code. Use \`extends\` for producers (read operations) and \`super\` for consumers (write operations).
`
};

