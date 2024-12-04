<?php

namespace App\Entity;

use ApiPlatform\Metadata\ApiProperty;
use ApiPlatform\Metadata\ApiResource;
use ApiPlatform\Metadata\Delete;
use ApiPlatform\Metadata\Get;
use ApiPlatform\Metadata\GetCollection;
use ApiPlatform\Metadata\Link;
use ApiPlatform\Metadata\Patch;
use ApiPlatform\Metadata\Post;
use App\Repository\ProductRepository;
use Doctrine\DBAL\Types\Types;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;
use Symfony\Component\Validator\Constraints as Assert;

#[ORM\Entity(repositoryClass: ProductRepository::class)]
#[ApiResource(normalizationContext: ['groups' => ['Product:read']])]
#[Get(normalizationContext: ['groups' => ['Product:read', 'Product:detail', 'Product-Category:read']])]
#[GetCollection(normalizationContext: ['groups' => ['Product:read', 'Product-Category:read']])]
#[GetCollection(
    uriTemplate: '/category/{id}/products',
    uriVariables: ['id' => new Link(toProperty: 'category', fromClass: Category::class)]
)]
#[Delete]
#[Post]
#[Patch(denormalizationContext: ['groups' => ['Product:write']])]
#[ORM\HasLifecycleCallbacks]
class Product
{
    #[ORM\Id]
    #[ORM\GeneratedValue]
    #[ORM\Column]
    private ?int $id = null;

    #[ORM\Column(length: 100)]
    #[Assert\NotBlank(message: 'Le nom du produit est obligatoire.')]
    #[Assert\Length(
        max: 100,
        maxMessage: 'Le nom ne peut pas dépasser 100 caractères.'
    )]
    #[Groups(['Product:read', 'Product:write'])] private ?string $nom = null;
    #[ORM\Column(length: 255)]
    #[Groups(['Product:detail', 'Product:write'])]
    #[Assert\NotBlank(message: 'La description est obligatoire.')]
    #[Assert\Length(
        max: 255,
        maxMessage: 'La description ne peut pas dépasser 255 caractères.'
    )] private ?string $description = null;
    #[ORM\Column]
    #[Groups(['Product:read', 'Product:write'])]
    #[Assert\NotBlank(message: 'Le prix est obligatoire.')]
    #[Assert\Positive(message: 'Le prix doit être un nombre positif.')] private ?float $prix = null;
    #[ORM\Column(type: Types::DATE_MUTABLE)]
    #[Groups(['Product:detail', 'Product:write'])]
    private ?\DateTimeInterface $dateCr = null;

    #[ORM\ManyToOne(inversedBy: 'products')]
    #[ORM\JoinColumn(nullable: false)]
    #[ApiProperty(example: '/api/categories/{id}')]
    #[Groups(['Product:read', 'Product:write'])]
    private ?Category $category = null;

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getNom(): ?string
    {
        return $this->nom;
    }

    public function setNom(string $nom): static
    {
        $this->nom = $nom;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): static
    {
        $this->description = $description;

        return $this;
    }

    public function getPrix(): ?float
    {
        return $this->prix;
    }

    public function setPrix(float $prix): static
    {
        $this->prix = $prix;

        return $this;
    }

    public function getDateCr(): ?\DateTimeInterface
    {
        return $this->dateCr;
    }

    public function setDateCr(\DateTimeInterface $dateCr): static
    {
        $this->dateCr = $dateCr;

        return $this;
    }

    public function getCategory(): ?Category
    {
        return $this->category;
    }

    public function setCategory(?Category $category): static
    {
        $this->category = $category;

        return $this;
    }

    #[ORM\PrePersist]
    public function setCreationDate(): void
    {
        if (!$this->dateCr) {
            $this->dateCr = new \DateTimeImmutable();
        }
    }
}
