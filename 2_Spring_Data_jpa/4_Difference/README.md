# Difference Between JPA, Hibernate and Spring Data JPA

## Java Persistence API (JPA)
- **Specification**: JSR 338 for persisting, reading and managing data via Java objects  
- **Abstraction**: Defines interfaces and annotations, but **no** concrete implementation  
- **Implementations**: Hibernate, EclipseLink, OpenJPA, etc.

## Hibernate
- **Type**: ORM (Object‑Relational Mapping) tool  
- **Role**: One of the most popular **implementations** of the JPA specification  
- **Features beyond JPA**:  
  - Native APIs (`Session`, `Criteria`)  
  - Caching strategies  
  - Additional dialect support

## Spring Data JPA
- **Type**: Higher‑level abstraction over JPA implementations (e.g., Hibernate)  
- **Purpose**:  
  - Eliminate boilerplate CRUD/repository code  
  - Provide automatic repository implementations  
  - Integrate transaction management and query derivation  
- **Does not** bundle a JPA provider; it depends on Hibernate or another JPA implementation under the hood

---

## Code Comparison

### Using Hibernate Native API

```java
public Integer addEmployee(Employee employee){
    Session session = factory.openSession();
    Transaction tx = null;
    Integer employeeID = null;
    try {
        tx = session.beginTransaction();
        employeeID = (Integer) session.save(employee);
        tx.commit();
    } catch (HibernateException e) {
        if (tx != null) tx.rollback();
        e.printStackTrace();
    } finally {
        session.close();
    }
    return employeeID;
}