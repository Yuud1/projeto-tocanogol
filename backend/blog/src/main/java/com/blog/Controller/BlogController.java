package com.blog.Controller;

import com.blog.Entity.BlogEntity;
import com.blog.Service.BlogService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/artigo")
@CrossOrigin(origins = "*")
public class BlogController {

    private final BlogService blogService;

    public BlogController(BlogService blogService) {
        this.blogService = blogService;
    }

    @PostMapping("/criar")
    public ResponseEntity<Map<String, Object>> createArticle(@RequestBody BlogEntity blogEntity) {
        BlogEntity createPost = blogService.createArticle(blogEntity);
        Map<String, Object> response = new HashMap<>();
        response.put("success", true);
        response.put("post", createPost);
        return ResponseEntity.ok(response);
    }

    @GetMapping("/listar")
    public List<BlogEntity> getArticleAll() {
        return blogService.getArticleAll();
    }

    @GetMapping("/listar/{id}")
    public ResponseEntity<BlogEntity> getArticleById(@PathVariable Long id) {
        BlogEntity blogEntity = blogService.getArticleById(id);
        return blogEntity != null ? ResponseEntity.ok(blogEntity) : ResponseEntity.notFound().build();
    }

    @GetMapping("/category/{category}")
    public ResponseEntity<List<BlogEntity>> getArticleByCategory(@PathVariable String category) {
        List<BlogEntity> blogEntity = blogService.getArticleByCategory(category);
        return blogEntity != null && !blogEntity.isEmpty()
                ? ResponseEntity.ok(blogEntity)
                : ResponseEntity.notFound().build();
    }

    @PutMapping("/update/{id}")
    public ResponseEntity<Map<String, Object>> updatedArticle(@PathVariable Long id, @RequestBody BlogEntity blogEntity) {
        BlogEntity updatedArticle = blogService.updatedArticle(id, blogEntity);
        Map<String, Object> responseUpdate = new HashMap<>();

        if (updatedArticle != null) {
            responseUpdate.put("success", true);
            responseUpdate.put("post", updatedArticle);
            return ResponseEntity.ok(responseUpdate);
        } else {
            responseUpdate.put("success", false);
            responseUpdate.put("message", "Blog post not found");
            return ResponseEntity.status(404).body(responseUpdate);
        }
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<Void> deleteArticle(@PathVariable Long id) {
        boolean delete = blogService.deleteArticle(id);
        return delete ? ResponseEntity.noContent().build() : ResponseEntity.notFound().build();
    }
}
