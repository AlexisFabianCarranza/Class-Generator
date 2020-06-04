@Entity
@Table(name="Providers")
@EdmEntityType(namespace = "OData") 
public class Providers {
  private String id;
  private String userId;
  private String phone;
  private String description;
  private String address;
  private String createdAt;
  private String updatedAt;
}